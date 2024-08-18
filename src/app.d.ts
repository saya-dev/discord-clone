import type { User } from '@prisma/client';
import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
import type { ParaglideLocals } from '@inlang/paraglide-sveltekit';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: import('lucia').User;
			session: import('lucia').Session;
			paraglide: ParaglideLocals<AvailableLanguageTag>;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
