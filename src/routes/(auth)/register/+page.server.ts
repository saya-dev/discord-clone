import * as m from '$paraglide/messages';
import { fail } from '@sveltejs/kit';
import { redirect } from '$lib/i18n';
import { Register } from '$lib/schemas';
import { db, lucia } from '$lib/server';
import { setError, message, superValidate } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';
import { RetryAfterRateLimiter } from 'sveltekit-rate-limiter/server';
import bcrypt from 'bcryptjs';

const limiter = new RetryAfterRateLimiter({
	IP: [2, 'd']
});

export const load = async () => {
	return {
		form: await superValidate(valibot(Register))
	};
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, valibot(Register));
		if (!form.valid) return fail(400, { form });

		const usernameTaken = await db.user.findUnique({ where: { username: form.data.username } });
		if (usernameTaken) return setError(form, 'username', m.field_username_error_taken());

		const emailTaken = await db.user.findUnique({ where: { email: form.data.email } });
		if (emailTaken) return setError(form, 'email', m.field_email_error_taken());

		const { limited, retryAfter } = await limiter.check(event);
		if (limited) return message(form, { retryAfter }, { status: 429 });

		console.log(limited, retryAfter);

		const user = await db.user.create({
			data: {
				nickname: form.data.nickname,
				username: form.data.username,
				email: form.data.email,
				password: await bcrypt.hash(form.data.password, 10)
			}
		});

		const session = await lucia.createSession(user.id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);

		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});

		redirect(302, '/app');
	}
};
