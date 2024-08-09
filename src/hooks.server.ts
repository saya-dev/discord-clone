import type { RequestEvent } from '@sveltejs/kit';
import { JWT_SECRET } from '$env/static/private';
import { sequence } from '@sveltejs/kit/hooks';
import { i18n, redirect } from '$lib/i18n';
import { db } from '$lib/server';
import { createVerifier } from 'fast-jwt';

const verify = createVerifier({ key: JWT_SECRET, cache: true });

const getSession = async (event: RequestEvent) => {
	const token = event.cookies.get('token');
	if (!token) return;

	try {
		const { id } = verify(token);
		return await db.user.findUnique({ where: { id } });
	} catch {
		return;
	}
};

export const handle = sequence(i18n.handle(), async ({ event, resolve }) => {
	const pathname = i18n.route(event.url.pathname);

	if (event.route.id?.startsWith('/(auth)')) {
		const session = await getSession(event);
		if (session) {
			event.locals.session = session;
			if (session.verified) redirect(302, '/app');
			else if (!pathname.startsWith('/verify')) redirect(302, '/verify');
		} else if (pathname.startsWith('/verify')) redirect(302, '/login');
	}

	if (pathname.startsWith('/app')) {
		const session = await getSession(event);
		if (!session) redirect(302, '/login');
		event.locals.session = session;
	}

	return await resolve(event);
});
