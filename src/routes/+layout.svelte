<script>
	import '../app.postcss';
	import { ModeWatcher } from 'mode-watcher';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
</script>

<ModeWatcher />

<ParaglideJS {i18n}>
	<slot />
</ParaglideJS>
