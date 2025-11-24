<script lang="ts">
	import WorkFlowItem from './workFlowItem.svelte';
	import workflowData from './workflow.json';

	interface WorkflowItem {
		title: string;
		description: string;
		icon: string;
		linkText?: string;
		link?: string;
	}

	const items: WorkflowItem[] = workflowData;
</script>

<section class="section">
	<div class="container">
		<div class="text-center mb-12 slide-in-up">
			<h2
				class="text-4xl md:text-5xl font-bold mb-4"
				style="color: var(--color-text-header-primary);"
			>
				Tailored to your workflow.
			</h2>
		</div>

		<div class="workflow-grid">
			{#each items as item}
				<WorkFlowItem
					title={item.title}
					description={item.description}
					icon={item.icon}
					linkText={item.linkText}
					link={item.link}
				/>
			{/each}
		</div>
	</div>
</section>

<style>
	.workflow-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 2rem;
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	@media (min-width: 640px) {
		.workflow-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 2.5rem;
		}
	}

	@media (min-width: 1024px) {
		.workflow-grid {
			grid-template-columns: repeat(4, 1fr);
			gap: 3rem;
		}
	}

	@media (min-width: 1280px) {
		.workflow-grid {
			gap: 4rem;
			padding: 0;
		}
	}
</style>
