<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let seconds: number;

	const dispatch = createEventDispatcher();

	let time = new Date(seconds * 1000).toISOString().substring(11, 19);

	const interval = setInterval(() => {
		seconds -= 1;
		time = new Date(seconds * 1000).toISOString().substring(11, 19);
		if (seconds == 0) {
			clearInterval(interval);
			dispatch('finish');
		}
	}, 1000);
</script>

{time}
