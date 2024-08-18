<script lang="ts">
	import * as m from '$paraglide/messages';
	import { superForm } from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';
	import { Login } from '$lib/schemas';

	import * as Form from '$components/ui/form';
	import { Input } from '$components/ui/input';
	import { LogIn } from 'lucide-svelte';

	export let data;

	const form = superForm(data.form, {
		validators: valibotClient(Login)
	});

	const { form: formData, enhance } = form;
</script>

<svelte:head>
	<title>{m.login()} - Disclone</title>
</svelte:head>

<h1 class="text-2xl font-semibold tracking-tight">{m.login_heading()}</h1>
<p class="text-sm text-muted-foreground">{m.login_description()}</p>

<form class="mt-4" method="POST" use:enhance>
	<Form.Field {form} name="email">
		<Form.Control let:attrs>
			<Form.Label>{m.field_email()}</Form.Label>
			<Input placeholder="name@example.com" {...attrs} bind:value={$formData.email} />
		</Form.Control>
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

	<Form.Button {form} class="mt-4 w-full" size="lg">
		<LogIn class="mr-2 w-4" />{m.login()}
	</Form.Button>
</form>

<p class="mt-4 text-sm text-muted-foreground">
	{m.login_dont_have_an_account()}
	<a href="/register" class="font-medium text-primary underline underline-offset-4">
		{m.register()}
	</a>
</p>
