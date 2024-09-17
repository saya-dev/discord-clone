<script lang="ts">
	import { Separator } from '$components/ui/separator';
	import * as Tooltip from '$components/ui/tooltip';
	import * as Avatar from '$components/ui/avatar';

	import HandMetal from 'lucide-svelte/icons/hand-metal';
	import Plus from 'lucide-svelte/icons/plus';
</script>

<div class="flex h-full">
	<div class="hide-scrollbar flex h-full flex-col items-center gap-2 overflow-auto p-3">
		<Tooltip.Root group openDelay={0} closeDelay={0}>
			<Tooltip.Trigger asChild let:builder>
				<a use:builder.action {...builder} href="/channels/@me">
					<Avatar.Root class="h-12 w-12">
						<Avatar.Fallback><HandMetal /></Avatar.Fallback>
					</Avatar.Root>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right" sideOffset={10}>Conversations</Tooltip.Content>
		</Tooltip.Root>

		<Separator />

		<Tooltip.Root group openDelay={0} closeDelay={0}>
			<Tooltip.Trigger asChild let:builder>
				<a use:builder.action {...builder} href="/channels/@me">
					<Avatar.Root class="h-12 w-12">
						<Avatar.Fallback>pl</Avatar.Fallback>
					</Avatar.Root>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right" sideOffset={10}>Placeholder Server</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root group openDelay={0} closeDelay={0}>
			<Tooltip.Trigger asChild let:builder>
				<a use:builder.action {...builder} href="/channels/@me">
					<Avatar.Root class="h-12 w-12">
						<Avatar.Fallback>pl</Avatar.Fallback>
					</Avatar.Root>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right" sideOffset={10}>Placeholder Server</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root group openDelay={0} closeDelay={0}>
			<Tooltip.Trigger asChild let:builder>
				<a use:builder.action {...builder} href="/channels/@me">
					<Avatar.Root class="h-12 w-12">
						<Avatar.Fallback>pl</Avatar.Fallback>
					</Avatar.Root>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right" sideOffset={10}>Placeholder Server</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root group openDelay={0} closeDelay={0}>
			<Tooltip.Trigger asChild let:builder>
				<a use:builder.action {...builder} href="/channels/@me">
					<Avatar.Root class="h-12 w-12">
						<Avatar.Fallback>pl</Avatar.Fallback>
					</Avatar.Root>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right" sideOffset={10}>Placeholder Server</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root group openDelay={0} closeDelay={0}>
			<Tooltip.Trigger asChild let:builder>
				<a use:builder.action {...builder} href="/channels/@me">
					<Avatar.Root class="h-12 w-12">
						<Avatar.Fallback>pl</Avatar.Fallback>
					</Avatar.Root>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right" sideOffset={10}>Placeholder Server</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root group openDelay={0} closeDelay={0}>
			<Tooltip.Trigger asChild let:builder>
				<a use:builder.action {...builder} href="/channels/@me">
					<Avatar.Root class="h-12 w-12">
						<Avatar.Fallback>pl</Avatar.Fallback>
					</Avatar.Root>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right" sideOffset={10}>Placeholder Server</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root group openDelay={0} closeDelay={0}>
			<Tooltip.Trigger asChild let:builder>
				<a use:builder.action {...builder} href="/channels/@me">
					<Avatar.Root class="h-12 w-12">
						<Avatar.Fallback>pl</Avatar.Fallback>
					</Avatar.Root>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right" sideOffset={10}>Placeholder Server</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root group openDelay={0} closeDelay={0}>
			<Tooltip.Trigger asChild let:builder>
				<a use:builder.action {...builder} href="/channels/@me">
					<Avatar.Root class="h-12 w-12">
						<Avatar.Fallback>pl</Avatar.Fallback>
					</Avatar.Root>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right" sideOffset={10}>Placeholder Server</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root group openDelay={0} closeDelay={0}>
			<Tooltip.Trigger asChild let:builder>
				<a use:builder.action {...builder} href="/channels/@me">
					<Avatar.Root class="h-12 w-12">
						<Avatar.Fallback>pl</Avatar.Fallback>
					</Avatar.Root>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right" sideOffset={10}>Placeholder Server</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root group openDelay={0} closeDelay={0}>
			<Tooltip.Trigger asChild let:builder>
				<a use:builder.action {...builder} href="/channels/@me">
					<Avatar.Root class="h-12 w-12">
						<Avatar.Fallback>pl</Avatar.Fallback>
					</Avatar.Root>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right" sideOffset={10}>Placeholder Server</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root group openDelay={0} closeDelay={0}>
			<Tooltip.Trigger asChild let:builder>
				<a use:builder.action {...builder} href="/channels/@me">
					<Avatar.Root class="h-12 w-12">
						<Avatar.Fallback>pl</Avatar.Fallback>
					</Avatar.Root>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right" sideOffset={10}>Placeholder Server</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root group openDelay={0} closeDelay={0}>
			<Tooltip.Trigger asChild let:builder>
				<a use:builder.action {...builder} href="/channels/@me">
					<Avatar.Root class="h-12 w-12">
						<Avatar.Fallback>pl</Avatar.Fallback>
					</Avatar.Root>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right" sideOffset={10}>Placeholder Server</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root group openDelay={0} closeDelay={0}>
			<Tooltip.Trigger asChild let:builder>
				<a use:builder.action {...builder} href="/channels/@me">
					<Avatar.Root class="h-12 w-12">
						<Avatar.Fallback>pl</Avatar.Fallback>
					</Avatar.Root>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right" sideOffset={10}>Placeholder Server</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root group openDelay={0} closeDelay={0}>
			<Tooltip.Trigger asChild let:builder>
				<a use:builder.action {...builder} href="/channels/@me">
					<Avatar.Root class="h-12 w-12">
						<Avatar.Fallback>pl</Avatar.Fallback>
					</Avatar.Root>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right" sideOffset={10}>Placeholder Server</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root group openDelay={0} closeDelay={0}>
			<Tooltip.Trigger asChild let:builder>
				<a use:builder.action {...builder} href="/channels/@me">
					<Avatar.Root class="h-12 w-12">
						<Avatar.Fallback>pl</Avatar.Fallback>
					</Avatar.Root>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right" sideOffset={10}>Placeholder Server</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root group openDelay={0} closeDelay={0}>
			<Tooltip.Trigger asChild let:builder>
				<a use:builder.action {...builder} href="/channels/@me">
					<Avatar.Root class="h-12 w-12">
						<Avatar.Fallback>pl</Avatar.Fallback>
					</Avatar.Root>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right" sideOffset={10}>Placeholder Server</Tooltip.Content>
		</Tooltip.Root>

		<Separator />

		<Tooltip.Root group openDelay={0} closeDelay={0}>
			<Tooltip.Trigger>
				<Avatar.Root class="h-12 w-12">
					<Avatar.Fallback><Plus /></Avatar.Fallback>
				</Avatar.Root>
			</Tooltip.Trigger>
			<Tooltip.Content side="right" sideOffset={10}>Add a Server</Tooltip.Content>
		</Tooltip.Root>
	</div>

	<slot />
</div>
