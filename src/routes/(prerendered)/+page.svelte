<script lang="ts">
	import * as m from '$paraglide/messages';

	import { Button } from '$components/ui/button';
	import { HandMetal } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Disclone</title>
</svelte:head>

<div class="py-20 sm:py-28 md:py-32">
	<h1
		class="text-balance text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
	>
		{m.landing_hero_heading()}
	</h1>
	<p class="mx-auto mt-6 max-w-3xl text-balance text-center text-base sm:text-lg">
		{m.landing_hero_description()}
	</p>
	<div class="mt-8 flex items-center justify-center gap-4">
		<Button href="/register" size="lg"
			><HandMetal class="mr-2 size-5" /> {m.landing_hero_get_started()}</Button
		>
	</div>
</div>
