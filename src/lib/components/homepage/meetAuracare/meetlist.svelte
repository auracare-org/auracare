<script lang="ts">
	import type { ComponentType } from 'svelte';

	let { title, description, icon }: { title: string; description: string; icon: ComponentType } = $props();
</script>

<div class="meet-card">
	<!-- Icon container with stronger glassmorphism -->
	<div class="icon-container">
		<svelte:component this={icon} size={24} stroke={1.5} class="icon" />
	</div>

	<!-- Content -->
	<div class="content">
		<h4 class="font-bold mb-1 card-title">
			{title}
		</h4>
		<p class="card-description">
			{description}
		</p>
	</div>
</div>

<style>
	.meet-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 1rem;
		width: 100%;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		background: var(--color-white-alpha-10);
		border: 1px solid var(--color-white-alpha-20);
		border-radius: var(--radius-md);
		padding: 1.5rem;
		box-shadow: var(--shadow-glass-glow);
	}

	@media (min-width: 768px) {
		.meet-card {
			flex-direction: row;
			align-items: center;
			text-align: left;
			padding: 0.5rem 1.125rem 0.5rem 0.5rem;
		}
	}

	.icon-container {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
		background: var(--color-white-alpha-10);
		border-radius: 12px;
		padding: 12px;
		min-width: 48px;
		box-shadow: var(--shadow-glass-glow);
	}

	@media (min-width: 768px) {
		.icon-container {
			align-self: stretch;
		}
	}

	.content {
		flex: 1;
	}

	:global(.icon) {
		color: var(--color-icon-white);
	}

	.card-title {
		font-size: 18px;
		line-height: 28px;
		color: var(--color-text-button-primary-default);
	}

	.card-description {
		font-size: 16px;
		line-height: 24px;
		color: var(--color-white-alpha-70);
	}
</style>
