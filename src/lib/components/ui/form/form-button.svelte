<script lang="ts" generics="T extends Record<string, unknown>,">
	import type { SuperForm } from 'sveltekit-superforms';

	import * as Button from '$components/ui/button/index.js';
	import { Countdown } from '$components/ui/countdown';
	import { TimerReset } from 'lucide-svelte';

	export let form: SuperForm<T>;

	const { message, delayed } = form;

	type $$Props = Button.Props & { form: SuperForm<T>; disabled?: boolean | undefined };
	type $$Events = Button.Events;

	let disabled: $$Props['disabled'] = undefined;

	export { disabled };
</script>

<Button.Root
	type="submit"
	disabled={$message?.status == 'limited' || $delayed || disabled}
	on:click
	on:keydown
	{...$$restProps}
>
	{#if $message?.status == 'limited'}
		<TimerReset class="mr-2 w-4" />
		<Countdown on:finish={() => ($message = undefined)} seconds={$message.retryAfter || 0} />
	{:else}
		<slot />
	{/if}
</Button.Root>
