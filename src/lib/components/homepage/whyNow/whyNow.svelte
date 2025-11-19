<script lang="ts">
	import WhyNowList from './whyNowList.svelte';
	import WhyNowSub from './whyNowSub.svelte';

	const title = 'Why now?';
	const subtitle = 'Healthcare needs to change, and it is!';

	const reasons = [
		{
			title: 'Healthcare systems are stretched',
			description:
				'Healthcare providers are facing unprecedented challenges: staff shortages, rising costs, and increasing patient volume.'
		},
		{
			title: 'Community providers are stepping up',
			description:
				'New initiatives like Pharmacy First in the England and similar schemes Scotland, Canada and Germany empower non-doctors to handle more cases.'
		},
		{
			title: 'Patient expectations have shifted',
			description:
				'People are tired of waiting months for health care. They need fast, efficient and local attention.'
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

		<div class="flex flex-col gap-6">
			<!-- Top row: 3 cards -->
			<div class="grid md:grid-cols-3 gap-6">
				{#each reasons as reason, index}
					<WhyNowList title={reason.title} description={reason.description} iconIndex={index} />
				{/each}
			</div>
			<!-- Bottom row: 1 full-width card -->
			<WhyNowSub />
		</div>
	</div>
</section>
