<script lang="ts">
	import * as m from '$paraglide/messages';

	import { Button } from '$components/ui/button';
	import { LanguageSwitch } from '$components/ui/language-switch';
	import { LightSwitch } from '$components/ui/light-switch';
	import { ExternalLink, LogIn, HandMetal } from 'lucide-svelte';
</script>

<header
	class="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-16 items-center justify-between p-4">
		<a href="/" class="flex items-center gap-2 text-xl font-bold"
			><HandMetal class="size-6" /> Disclone</a
		>
		<nav class="hidden gap-5 text-sm font-medium text-foreground/80 md:flex">
			<a
				class="flex items-center transition-colors hover:text-primary"
				href="https://github.com/saya-dev/discord-clone"
				target="_blank">Github Repository <ExternalLink class="ml-1 w-3" /></a
			>
		</nav>

		<div class="flex gap-2">
			<LanguageSwitch />
			<LightSwitch />
			<Button href="/login"><LogIn class="mr-2 size-4" /> {m.login()}</Button>
		</div>
	</div>
</header>

<div class="flex min-h-[calc(100vh-65px)] flex-col">
	<div class="flex-grow">
		<main class="container flex max-w-6xl flex-col items-center">
			<slot />
		</main>
	</div>
	<footer class="mt-4 flex h-16 items-center justify-center border-t border-border text-sm">
		<p class="mx-4 text-center text-foreground/80">
			Disclone is a discord clone made by <a
				href="https://github.com/saya-dev"
				target="_blank"
				class="text-foreground underline underline-offset-4">saya</a
			>. It is not affiliated with
			<a
				href="https://discord.com"
				target="_blank"
				class="text-foreground underline underline-offset-4">discord</a
			>.
		</p>
	</footer>
</div>
