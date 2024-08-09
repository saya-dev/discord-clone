<script lang="ts">
	import * as m from '$paraglide/messages';

	import { LightSwitch } from '$components/ui/light-switch';
	import { LanguageSwitch } from '$components/ui/language-switch';
	import { HandMetal } from 'lucide-svelte';
</script>

<div class="flex min-h-screen">
	<div
		class="relative flex min-w-full flex-col justify-between px-8 py-6 shadow-2xl xl:min-w-[650px]"
	>
		<div class="flex items-center justify-between">
			<a href="/" class="flex items-center gap-2 text-xl font-bold"
				><HandMetal class="size-6" /> Disclone</a
			>
			<div class="flex gap-2">
				<LanguageSwitch />
				<LightSwitch />
			</div>
		</div>
		<div class="flex items-center justify-center py-12 sm:px-24">
			<div class="w-[350px]">
				<slot />
			</div>
		</div>

		<p class="text-center text-xs text-muted-foreground">
			{m.common_legal_disclaimer()}
		</p>
	</div>
	<div class="hidden w-full items-center justify-center border-l bg-muted/40 px-8 xl:flex">
		<h1
			class="mt-4 max-w-[800px] scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl"
		>
			{m.landing_hero_title()}
		</h1>
	</div>
</div>
