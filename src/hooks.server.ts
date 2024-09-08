import { sequence } from '@sveltejs/kit/hooks';
import { lucia } from '$lib/server';
import { i18n, redirect } from '$lib/i18n';

export const handle = sequence(i18n.handle(), async ({ event, resolve }) => {
	const sessionId = event.cookies.get(lucia.sessionCookieName);
	const { session, user } = sessionId
		? await lucia.validateSession(sessionId)
		: { session: null, user: null };

	if (!session || session.fresh) {
		const sessionCookie = !session
			? lucia.createBlankSessionCookie()
			: lucia.createSessionCookie(session.id);
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
	}

	if (event.route.id?.startsWith('/(auth)') && session) redirect(302, '/channels');
	else if (event.route.id?.startsWith('/channels')) {
		if (!session) redirect(302, '/login');

		event.locals.session = session;
		event.locals.user = user;
	}

	return await resolve(event);
});

setInterval(() => lucia.deleteExpiredSessions(), 900000);
