<script lang="ts">
	import { Button } from '$components/ui/button';
	import { ExternalLink, LogIn } from 'lucide-svelte';
</script>

<header
	class="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-14 items-center justify-between p-4">
		<a href="/" class="flex items-center gap-2 font-bold">Disclone</a>
		<nav class="hidden gap-5 text-sm font-medium text-foreground/80 md:flex">
			<a
				class="flex items-center transition-colors hover:text-primary"
				href="https://github.com/saya-dev/discord-clone"
				target="_blank">Github Repository <ExternalLink class="ml-1 w-3" /></a
			>
		</nav>

		<div class="flex items-center gap-2">
			<Button href="/login" class="hidden md:flex"><LogIn class="mr-2 w-4" />Login</Button>
		</div>
	</div>
</header>

<div class="flex min-h-[calc(100vh-4rem)] flex-col">
	<div class="flex-grow"></div>
	<footer class="mt-4 border-t border-border text-sm leading-6">
		<div
			class="max-w-8xl container flex h-16 items-center justify-between gap-3 text-foreground/80"
		>
			<div class="flex items-center gap-2 lg:flex-1">
				<p>Disclone is a discord clone made by saya. It is not affiliated with discord.</p>
			</div>
		</div>
	</footer>
</div>
