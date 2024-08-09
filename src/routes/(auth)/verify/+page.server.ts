import * as m from '$paraglide/messages';
import { ORIGIN, JWT_SECRET, RESEND_DOMAIN } from '$env/static/private';
import { fail } from '@sveltejs/kit';
import { i18n } from '$lib/i18n';
import { resend } from '$lib/server';
import { RetryAfterRateLimiter } from 'sveltekit-rate-limiter/server';
import { createSigner } from 'fast-jwt';
import { render } from 'svelte-email';
import verify from '$components/emails/verify.svelte';

export const load = ({
	locals: {
		session: { username, email }
	}
}) => {
	return { username, email };
};

const limiter = new RetryAfterRateLimiter({
	IP: [1, 'm']
});

const generateVerificationToken = createSigner({ key: JWT_SECRET, expiresIn: '1h' });

export const actions = {
	default: async (event) => {
		const { limited, retryAfter } = await limiter.check(event);
		if (limited) return fail(429, { status: 'limited', retryAfter });

		const {
			locals: { session }
		} = event;

		await resend.emails.send({
			from: `Disclone <noreply@${RESEND_DOMAIN}>`,
			to: [session.email],
			subject: m.email_verify_subject(),
			html: render({
				template: verify,
				props: {
					nickname: session.nickname,
					link: `${ORIGIN}${i18n.resolveRoute('/verify')}/${generateVerificationToken({ id: session.id })}`
				}
			})
		});

		return { status: 'success' };
	}
};
