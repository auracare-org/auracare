<script lang="ts">
	import WhyNowList from './whyNowList.svelte';

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
		},
		{
			title: 'Technology is ready',
			description:
				'Advances in AI, low-cost imaging hardware, and digitisation of clinical pathways make safe and scalable triage possible today.',
			fullWidth: true
		}
	];
</script>

<section class="why-now-section">
	<div class="container">
		<div class="why-now-header">
			<h2 class="why-now-title">{title}</h2>
			<p class="why-now-subtitle">{subtitle}</p>
		</div>

		<div class="why-now-grid">
			<!-- First 3 cards in a row -->
			<div class="why-now-row-top">
				{#each reasons.slice(0, 3) as reason, index}
					<WhyNowList title={reason.title} description={reason.description} iconIndex={index} />
				{/each}
			</div>

			<!-- Last card full width -->
			<div class="why-now-row-bottom">
				<WhyNowList
					title={reasons[3].title}
					description={reasons[3].description}
					iconIndex={3}
				/>
			</div>
		</div>
	</div>
</section>

<style>
	.why-now-section {
		background: white;
		padding: 120px 32px;
	}

	.container {
		max-width: 1204px;
		margin: 0 auto;
	}

	.why-now-header {
		text-align: center;
		margin-bottom: 32px;
	}

	.why-now-title {
		font-family: 'Poppins', sans-serif;
		font-size: 48px;
		font-weight: 400;
		line-height: 64px;
		color: #2f4ec0;
		margin: 0 0 12px 0;
	}

	.why-now-subtitle {
		font-family: 'Poppins', sans-serif;
		font-size: 20px;
		font-weight: 400;
		line-height: 28px;
		color: #6c757d;
		opacity: 0.8;
		margin: 0;
	}

	.why-now-grid {
		display: flex;
		flex-direction: column;
		gap: 24px;
		max-width: 1160px;
		margin: 0 auto;
	}

	.why-now-row-top {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
	}

	.why-now-row-bottom {
		display: flex;
		justify-content: center;
	}

	.why-now-row-bottom :global(.why-now-card) {
		max-width: 1160px;
		width: 100%;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.why-now-section {
			padding: 60px 24px;
		}

		.why-now-title {
			font-size: 36px;
			line-height: 48px;
		}

		.why-now-subtitle {
			font-size: 18px;
		}

		.why-now-row-top {
			grid-template-columns: 1fr;
		}
	}
</style>
