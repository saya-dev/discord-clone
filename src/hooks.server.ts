import { sequence } from '@sveltejs/kit/hooks';
import { i18n } from '$lib/i18n';
import { languageTag } from '$paraglide/runtime';

export const handle = sequence(i18n.handle(), async ({ event, resolve }) => {
	languageTag();

	// TODO: test if language is detected correctly.
	const route = event.route.id;
	const pathname = i18n.route(event.url.pathname);

	return await resolve(event);
});
