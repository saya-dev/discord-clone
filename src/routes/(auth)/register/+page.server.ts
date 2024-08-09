import * as m from '$paraglide/messages';
import { ORIGIN, JWT_SECRET, RESEND_DOMAIN } from '$env/static/private';
import { fail } from '@sveltejs/kit';
import { i18n, redirect } from '$lib/i18n';
import { Register } from '$lib/schemas';
import { db, resend } from '$lib/server';
import { setError, message, superValidate } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';
import { RetryAfterRateLimiter } from 'sveltekit-rate-limiter/server';
import { createSigner } from 'fast-jwt';
import { render } from 'svelte-email';
import verify from '$components/emails/verify.svelte';
import bcrypt from 'bcryptjs';

const limiter = new RetryAfterRateLimiter({
	IP: [2, 'd']
});

const generateSessionToken = createSigner({ key: JWT_SECRET, expiresIn: '7d' });
const generateVerificationToken = createSigner({ key: JWT_SECRET, expiresIn: '1h' });

export const load = async () => {
	return {
		form: await superValidate(valibot(Register))
	};
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, valibot(Register));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const usernameTaken = await db.user.findUnique({ where: { username: form.data.username } });
		if (usernameTaken) return setError(form, 'username', m.field_username_error_taken());

		const emailTaken = await db.user.findUnique({ where: { email: form.data.email } });
		if (emailTaken) return setError(form, 'email', m.field_email_error_taken());

		const { limited, retryAfter } = await limiter.check(event);
		if (limited) return message(form, { status: 'limited', retryAfter }, { status: 429 });

		const user = await db.user.create({
			data: {
				nickname: form.data.nickname,
				username: form.data.username,
				email: form.data.email,
				password: await bcrypt.hash(form.data.password, 10)
			}
		});

		event.cookies.set('token', generateSessionToken({ id: user.id }), { path: '/' });

		await resend.emails.send({
			from: `Disclone <noreply@${RESEND_DOMAIN}>`,
			to: [user.email],
			subject: m.email_verify_subject(),
			html: render({
				template: verify,
				props: {
					nickname: user.nickname,
					link: `${ORIGIN}${i18n.resolveRoute('/verify')}/${generateVerificationToken({ id: user.id })}`
				}
			})
		});

		redirect(302, '/verify');
	}
};
