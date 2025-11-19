<script lang="ts">
	import WorkFlowItem from './workFlowItem.svelte';
	import workflowData from './workflow.json';

	interface WorkflowItem {
		title: string;
		description: string;
		icon: string;
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
				<WorkFlowItem title={item.title} description={item.description} icon={item.icon} />
			{/each}
		</div>
	</div>
</section>

<style>
	.workflow-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 3rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	@media (min-width: 768px) {
		.workflow-grid {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
