<script lang="ts">
	import { IconFileText } from '@tabler/icons-svelte';

	let { title, description }: { title: string; description: string } = $props();
</script>

<div class="meet-card">
	<!-- Icon container with stronger glassmorphism -->
	<div class="icon-container">
		<IconFileText size={24} stroke={1.5} style="color: white;" />
	</div>

	<!-- Content -->
	<div class="content">
		<h4 class="font-bold mb-1" style="font-size: 20px; line-height: 30px; color: white;">
			{title}
		</h4>
		<p style="font-size: 18px; line-height: 26px; color: rgba(255, 255, 255, 0.7);">
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
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 16px;
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
		background: rgba(255, 255, 255, 0.15);
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
</style>
