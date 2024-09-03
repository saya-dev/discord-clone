<script lang="ts">
	import * as m from '$paraglide/messages';
	import { superForm } from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';
	import { Register } from '$lib/schemas';

	import * as Form from '$components/ui/form';
	import { Input } from '$components/ui/input';

	import LogIn from 'lucide-svelte/icons/log-in';

	export let data;

	const form = superForm(data.form, {
		validators: valibotClient(Register)
	});

	const { form: formData, enhance } = form;
</script>

<svelte:head>
	<title>{m.register()} - Disclone</title>
</svelte:head>

<h1 class="text-2xl font-semibold tracking-tight">{m.register_heading()}</h1>
<p class="text-sm text-muted-foreground">{m.register_description()}</p>

<form class="mt-4" method="POST" use:enhance>
	<Form.Field {form} name="nickname">
		<Form.Control let:attrs>
			<Form.Label>{m.field_nickname()}</Form.Label>
			<Input
				placeholder={m.field_nickname_placeholder()}
				{...attrs}
				bind:value={$formData.nickname}
			/>
		</Form.Control>
		<Form.Description>{m.field_nickname_description()}</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="username">
		<Form.Control let:attrs>
			<Form.Label>{m.field_username()}</Form.Label>
			<Input
				placeholder={m.field_username_placeholder()}
				{...attrs}
				bind:value={$formData.username}
			/>
		</Form.Control>
		<Form.Description>{m.field_username_description()}</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="email">
		<Form.Control let:attrs>
			<Form.Label>{m.field_email()}</Form.Label>
			<Input placeholder="name@example.com" {...attrs} bind:value={$formData.email} />
		</Form.Control>
		<Form.Description>{m.field_email_description()}</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="password">
		<Form.Control let:attrs>
			<Form.Label>{m.field_password()}</Form.Label>
			<Input
				type="password"
				placeholder="••••••••••••••••"
				{...attrs}
				bind:value={$formData.password}
			/>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="confirmPassword">
		<Form.Control let:attrs>
			<Form.Label>{m.field_confirm_password()}</Form.Label>
			<Input
				type="password"
				placeholder="••••••••••••••••"
				{...attrs}
				bind:value={$formData.confirmPassword}
			/>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Button {form} class="mt-4 w-full" size="lg"
		><LogIn class="mr-2 w-4" />{m.register()}</Form.Button
	>
</form>

<p class="mt-4 text-sm text-muted-foreground">
	{m.register_have_an_account()}
	<a href="/login" class="font-medium text-primary underline underline-offset-4">
		{m.login()}
	</a>
</p>
