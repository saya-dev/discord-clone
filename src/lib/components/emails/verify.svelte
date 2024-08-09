<script lang="ts">
	import * as m from '$paraglide/messages';
	import { languageTag } from '$paraglide/runtime';

	export let nickname: string;
	export let link: string;
</script>

<html lang={languageTag()}>
	<p>{m.email_greeting({ name: nickname })}</p>
	<p>{m.email_verify_description()}</p>
	<a href={link}>{m.common_verify()}</a>
	<p>{m.email_ignore()}</p>
	<p>{m.email_regards()}</p>
</html>
