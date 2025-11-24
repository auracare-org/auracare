<script lang="ts">
	import HowItWorksList from './howItWorksList.svelte';

	const header = 'How it works';
	const subheader = 'Digital triage and workflow documentation.';

	const steps = [
		{
			title: 'Structured Consultation',
			description:
				'Care workers work through a structured questionnaire with the patient. We automatically supervise each step and transcribe conversations to ensure regulatory compliance.'
		},
		{
			title: 'Triage Report',
			description:
				'Our software analyzes the inputs, flags conditions, suggests treatment steps, and generates a patient report summarising the entire consultation with triage reasoning.'
		},
		{
			title: 'Clinical Handoff',
			description:
				'If required, cases are automatically escalated to an available doctor or specialist with the completed report. Our software integrates directly with the NHS database.'
		}
	];
</script>

<section id="howitworks" class="section">
	<div class="container">
		<div class="text-center mb-12 slide-in-up">
			<h2
				class="text-4xl md:text-5xl font-bold mb-4"
				style="color: var(--color-text-header-primary);"
			>
				{header}
			</h2>
			<p class="subheader-text">
				{subheader}
			</p>
		</div>

		<div class="grid md:grid-cols-3 gap-8 items-stretch">
			{#each steps as step, index}
				<HowItWorksList title={step.title} description={step.description} stepNumber={index + 1} />
			{/each}
		</div>
	</div>
</section>

<style>
	.subheader-text {
		font-size: 20px;
		line-height: 28px;
		opacity: 0.8;
		color: var(--color-text-body-secondary);
	}
</style>
