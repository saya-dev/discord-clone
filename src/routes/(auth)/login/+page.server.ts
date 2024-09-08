import * as m from '$paraglide/messages';
import { fail } from '@sveltejs/kit';
import { redirect } from '$lib/i18n';
import { Login } from '$lib/schemas';
import { db, lucia } from '$lib/server';
import { setError, message, superValidate } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';
import { RetryAfterRateLimiter } from 'sveltekit-rate-limiter/server';
import bcrypt from 'bcryptjs';

const limiter = new RetryAfterRateLimiter({
	IP: [10, 'h'],
	IPUA: [3, '5s']
});

export const load = async () => {
	return {
		form: await superValidate(valibot(Login))
	};
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, valibot(Login));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const user = await db.user.findUnique({ where: { email: form.data.email } });
		if (!user) {
			const { limited, retryAfter } = await limiter.check(event);
			if (!limited) return setError(form, 'email', m.field_email_error_not_found());
			else return message(form, { retryAfter }, { status: 429 });
		}

		const isPasswordValid = await bcrypt.compare(form.data.password, user.password);
		if (!isPasswordValid) {
			const { limited, retryAfter } = await limiter.check(event);
			if (!limited) return setError(form, 'password', m.field_password_error_incorrect());
			else return message(form, { retryAfter }, { status: 429 });
		}

		const session = await lucia.createSession(user.id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);

		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});

		redirect(302, '/channels');
	}
};
