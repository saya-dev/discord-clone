<script lang="ts">
	import * as m from '$paraglide/messages';
	import { toggleMode } from 'mode-watcher';

	import * as Tooltip from '$components/ui/tooltip';
	import { Button } from '$components/ui/button';
	import { SunMoon, MoonStar } from 'lucide-svelte';
</script>

<Tooltip.Root group openDelay={0} closeDelay={0}>
	<Tooltip.Trigger>
		<Button on:click={toggleMode} variant="outline" size="icon">
			<SunMoon
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<MoonStar
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
		</Button>
	</Tooltip.Trigger>
	<Tooltip.Content>{m.common_light_switch_tooltip()}</Tooltip.Content>
</Tooltip.Root>
