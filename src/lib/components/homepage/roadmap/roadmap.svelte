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

<section class="section">
	<div class="container">
		<div class="text-center mb-12 slide-in-up">
			<h2
				class="text-4xl md:text-5xl font-bold mb-4"
				style="color: var(--color-text-header-primary);"
			>
				Roadmap
			</h2>
			<p class="text-lg" style="color: var(--color-text-body-secondary);">
				Our plan to transform primary care
			</p>
		</div>

		<div class="roadmap-grid">
			{#each items as item}
				<RoadmapItem
					quarter={item.quarter}
					title={item.title}
					description={item.description}
					icon={item.icon}
				/>
			{/each}
		</div>

		<div class="buttons">
			<a href="/about#our-story" class="btn btn-secondary">Hear our journey</a>
			<a href="mailto:hinlun@auracare.org.uk?subject=Join%20Pilot%20Program" class="btn btn-primary"
				>Join our pilot program</a
			>
		</div>
	</div>
</section>

<style>
	.roadmap-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
		margin-bottom: 3rem;
	}

	@media (min-width: 768px) {
		.roadmap-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.buttons {
		display: flex;
		gap: 1.5rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn {
		padding: 1rem 2rem;
		border-radius: 0.5rem;
		font-weight: 600;
		font-size: 1rem;
		text-decoration: none;
		transition: all 0.2s;
		display: inline-block;
	}

	.btn-primary {
		background-color: var(--color-bg-button-primary);
		color: white;
	}

	.btn-primary:hover {
		background-color: var(--color-primary-700);
		transform: translateY(-2px);
	}

	.btn-secondary {
		background-color: var(--color-bg-button-secondary);
		color: var(--color-text-button-secondary);
	}

	.btn-secondary:hover {
		background-color: #c5cce8;
		transform: translateY(-2px);
	}
</style>
