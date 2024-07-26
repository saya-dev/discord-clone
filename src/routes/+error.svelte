<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} - Disclone</title>
</svelte:head>

<div class="flex min-h-screen flex-col items-center justify-center gap-4">
	<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">{$page.status}</h3>
	<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
		{$page.error?.message}
	</h1>
</div>
