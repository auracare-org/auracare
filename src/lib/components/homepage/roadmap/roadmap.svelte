<script lang="ts">
	import RoadmapItem from './roadmapItem.svelte';
	import roadmapData from './roadmapitems.json';

	interface RoadmapItem {
		quarter: string;
		title: string;
		description: string;
		icon: string;
	}

	const items: RoadmapItem[] = roadmapData;
</script>

<section class="roadmap-section">
	<div class="roadmap-container">
		<div class="roadmap-header-section">
			<div class="roadmap-header-title">
				<p class="roadmap-title">Roadmap</p>
			</div>
			<p class="roadmap-subtitle">Our plan to transform primary care</p>
		</div>

		<div class="roadmap-cards-wrapper">
			<!-- Top row: 2 cards -->
			<div class="roadmap-row">
				{#each items.slice(0, 2) as item, index}
					<RoadmapItem
						quarter={item.quarter}
						title={item.title}
						description={item.description}
						icon={item.icon}
						isTopRow={true}
						index={index}
					/>
				{/each}
			</div>

			<!-- Bottom row: 2 cards -->
			<div class="roadmap-row">
				{#each items.slice(2, 4) as item, index}
					<RoadmapItem
						quarter={item.quarter}
						title={item.title}
						description={item.description}
						icon={item.icon}
						isTopRow={false}
						index={index}
					/>
				{/each}
			</div>
		</div>

		<div class="roadmap-buttons">
			<a href="/about#our-story" class="roadmap-btn roadmap-btn-secondary">Hear our story</a>
			<a href="mailto:hinlun@auracare.org.uk?subject=Join%20Pilot%20Program" class="roadmap-btn roadmap-btn-primary">Join our pilot program</a>
		</div>
	</div>
</section>

<style>
	.roadmap-section {
		background: #ffffff;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 120px 72.5px;
		width: 100%;
	}

	.roadmap-container {
		display: flex;
		flex-direction: column;
		gap: 48px;
		align-items: center;
		justify-content: center;
		max-width: 1160px;
		width: 100%;
	}

	.roadmap-header-section {
		display: flex;
		flex-direction: column;
		gap: 12px;
		align-items: center;
		width: 100%;
	}

	.roadmap-header-title {
		width: 100%;
		text-align: center;
	}

	.roadmap-title {
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
		font-size: 48px;
		line-height: 64px;
		color: var(--color-text-header-primary);
		margin: 0;
		text-align: center;
	}

	.roadmap-subtitle {
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
		font-size: 20px;
		line-height: 28px;
		color: #6c757d;
		opacity: 0.8;
		margin: 0;
		text-align: center;
		width: 100%;
	}

	.roadmap-cards-wrapper {
		display: flex;
		flex-direction: column;
		gap: 32px;
		align-items: center;
		width: 100%;
	}

	.roadmap-row {
		display: flex;
		gap: 32px;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 1160px;
	}

	.roadmap-buttons {
		display: flex;
		gap: 24px;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.roadmap-btn {
		box-sizing: border-box;
		display: flex;
		gap: 4px;
		align-items: center;
		justify-content: center;
		min-width: 80px;
		overflow: clip;
		padding: 16px;
		border-radius: 6px;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 18px;
		line-height: 28px;
		text-decoration: none;
		transition: all 0.2s ease;
		white-space: nowrap;
	}

	.roadmap-btn-secondary {
		background: #d5dcf2;
		color: var(--color-text-header-primary);
	}

	.roadmap-btn-secondary:hover {
		background: #c5ccf0;
		transform: translateY(-2px);
	}

	.roadmap-btn-primary {
		background: var(--color-bg-button-primary-default);
		color: #ffffff;
	}

	.roadmap-btn-primary:hover {
		background: #2642a8;
		transform: translateY(-2px);
	}

	/* Responsive */
	@media (max-width: 768px) {
		.roadmap-section {
			padding: 60px 24px;
		}

		.roadmap-title {
			font-size: 36px;
			line-height: 48px;
		}

		.roadmap-subtitle {
			font-size: 18px;
		}

		.roadmap-row {
			flex-direction: column;
		}

		.roadmap-buttons {
			flex-direction: column;
			width: 100%;
		}

		.roadmap-btn {
			width: 100%;
		}
	}
</style>
