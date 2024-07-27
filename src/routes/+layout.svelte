<script>
	import '../app.postcss';

	import { i18n } from '$lib/i18n';
	import * as m from '$paraglide/messages';

	import { ModeWatcher } from 'mode-watcher';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
</script>

<svelte:head>
	<meta name="description" content={m.landing_hero_description()} />
	<meta name="author" content={'saya'} />
</svelte:head>

<ModeWatcher />

<ParaglideJS {i18n}>
	<slot />
</ParaglideJS>
