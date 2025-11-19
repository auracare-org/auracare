<script lang="ts">
	import WhyNowList from './whyNowList.svelte';

	const title = 'Why now?';
	const subtitle = 'Healthcare needs to change';

	const reasons = [
		{
			title: 'Healthcare systems are stretched',
			description:
				'Healthcare providers are facing unprecedented challenges: staff shortages, rising costs, and increasing patient volume.'
		},
		{
			title: 'Community providers are stepping up',
			description:
				'New initiatives, like Pharmacy First in the England, empower non-doctors to handle more cases.'
		},
		{
			title: 'Patient expectations have shifted',
			description:
				'People are tired of waiting months for healthcare. They need fast, efficient and local attention.'
		},
		{
			title: 'Technology is ready',
			description:
				'Advances in AI, low-cost imaging hardware, and digitisation of clinical pathways make safe and scalable triage possible today.'
		}
	];
</script>

<section class="section">
	<div class="container">
		<div class="text-center mb-12 slide-in-up">
			<h2
				class="text-4xl md:text-5xl font-bold mb-4"
				style="color: var(--color-text-header-primary);"
			>
				{title}
			</h2>
			<p class="text-lg" style="color: var(--color-text-body-secondary);">
				{subtitle}
			</p>
		</div>

		<!-- All 4 cards in one row -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each reasons as reason, index}
				<WhyNowList title={reason.title} description={reason.description} iconIndex={index} />
			{/each}
		</div>
	</div>
</section>
