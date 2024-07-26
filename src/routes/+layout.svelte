<script>
	import '../app.postcss';

	import { i18n } from '$lib/i18n';

	import { ModeWatcher } from 'mode-watcher';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
</script>

<ModeWatcher />

<ParaglideJS {i18n}>
	<slot />
</ParaglideJS>
