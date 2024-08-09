import { JWT_SECRET } from '$env/static/private';
import { redirect } from '$lib/i18n.js';
import { db } from '$lib/server.js';
import { createVerifier } from 'fast-jwt';

const verify = createVerifier({ key: JWT_SECRET, cache: true });

export const GET = async ({ params: { token } }) => {
	try {
		const { id } = verify(token);
		await db.user.update({
			where: { id },
			data: {
				verified: true
			}
		});
	} catch {
		redirect(302, '/verify?tokenExpired=true');
	}

	redirect(302, '/app');
};
