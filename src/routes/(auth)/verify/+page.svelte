<script lang="ts">
	import * as m from '$paraglide/messages';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import { Button } from '$components/ui/button';
	import { Reload, LapTimer } from 'svelte-radix';
	import { Countdown } from '$components/ui/countdown';
	import { toast } from 'svelte-sonner';

	export let data;
	export let form;

	$: if (form?.status == 'success') toast.success(m.verify_email_sent());
</script>

<svelte:head>
	<title>{m.common_verify()} - Disclone</title>
</svelte:head>

<h1 class="text-2xl font-semibold tracking-tight">{m.verify_title({ name: data.username })}</h1>
<p class="text-sm text-muted-foreground">{m.verify_description_1()}</p>

<p class="mt-4 text-lg">{m.verify_description_2({ email: data.email })}</p>
<p class="text-sm text-muted-foreground">{m.verify_description_3()}</p>

<form method="POST" use:enhance>
	<Button type="submit" disabled={form?.status == 'limited'} class="mt-6 w-full" size="lg"
		>{#if form?.status == 'limited' && form.retryAfter}
			<LapTimer class="mr-2 w-4" />
			<Countdown on:finish={() => (form = null)} seconds={form?.retryAfter} />
		{:else}
			<Reload class="mr-2 w-4" />{m.verify_resend_email()}
		{/if}
	</Button>
</form>

{#if $page.url.searchParams.get('tokenExpired')}
	<p class="mt-4 text-sm text-destructive">{m.verify_error_token_expired()}</p>
{/if}
