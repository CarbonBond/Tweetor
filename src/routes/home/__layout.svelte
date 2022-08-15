<script lang="ts">
	import { page } from '$app/stores';

	import Navigation from '$root/components/navigation.svelte';
	import Trending from '$root/components/trending.svelte';
	import Transition from '$root/components/transition.svelte';
</script>

<div class="container">
	<div class="nav">
		<Navigation />
	</div>
		<main class="feed">
			<Transition url={$page.url}>
				<slot />
			</Transition>
		</main>
	<Trending />
</div>

<style>
	.container {
		height: 100vh;
		max-width: 100vw;
		margin: 0 auto;
		display: flex;
	}

	.feed {
		max-width: 100%;
		border: 1px solid var(--color-border-primary);
		border-top: none;
		border-bottom: none;
	}

	@media (max-width: 1024px) {
		.nav {
			position: fixed;
			background-color: var(--color-bg-primary);
			bottom: 0;
			width: 100%;
			height: 60px;
		}
	}
	@media (min-width: 1024px) {
		.container {
			max-width: 1240px;
			margin: 0 auto;
			grid-template-columns: 1fr 50ch 1fr;
		}
	}
</style>
