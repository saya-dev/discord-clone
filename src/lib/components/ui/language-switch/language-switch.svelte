<script lang="ts">
	import * as m from '$paraglide/messages';
	import { availableLanguageTags, languageTag } from '$paraglide/runtime';
	import { i18n, languages } from '$lib/i18n.js';
	import { page } from '$app/stores';

	import * as DropdownMenu from '$components/ui/dropdown-menu';
	import * as Tooltip from '$components/ui/tooltip';
	import { Button } from '$components/ui/button';
	import { Languages } from 'lucide-svelte';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		<Tooltip.Root openDelay={100} closeDelay={100}>
			<Tooltip.Trigger>
				<Button variant="outline" size="icon">
					<Languages class="size-5" />
				</Button>
			</Tooltip.Trigger>
			<Tooltip.Content>{m.common_language_switch_tooltip()}</Tooltip.Content>
		</Tooltip.Root>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-48">
		<DropdownMenu.Group>
			<DropdownMenu.Label>{m.common_language_switch_title()}</DropdownMenu.Label>
			<DropdownMenu.Separator />

			{#each availableLanguageTags as lang}
				<a href={i18n.route($page.url.pathname)} hreflang={lang}>
					<DropdownMenu.CheckboxItem checked={languageTag() == lang}>
						{languages[lang]}
					</DropdownMenu.CheckboxItem>
				</a>
			{/each}
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
