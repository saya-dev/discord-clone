import { createI18n } from '@inlang/paraglide-sveltekit';
import { redirect as sveltekitRedirect } from '@sveltejs/kit';
import * as runtime from '$paraglide/runtime';

export const i18n = createI18n(runtime);

export const redirect: typeof sveltekitRedirect = (status, location) => {
	sveltekitRedirect(status, i18n.resolveRoute(location as string));
};

export const languages = {
	en: 'English'
};
