<script lang="ts">
	import Meetlist from './meetlist.svelte';
	import SineWave from './meetAuracarePulse.svelte';
	import auracareLogoWhite from './whiteAuracare.svg';

	const subText =
		'Our digitally enhanced triage tools help primary care providers diagnose without the need for an on-site doctor.';

	const features = [
		{
			title: 'Automated clinical assessments',
			description: 'We automatically record and document consults using PGD pathways. No paperwork!'
		},
		{
			title: 'End-to-end workflow integration',
			description:
				'Notes, prescriptions, referrals and NHS submissions generated and sent in one seamless flow.'
		},
		{
			title: 'AI Assisted Consultations',
			description:
				'Our AI models help care workers diagnose visual conditions faster and more accurately, with a full audit trail.'
		}
	];
</script>

<section class="section meet-section">
	<SineWave />
	<div class="container relative z-10">
		<div class="grid md:grid-cols-2 gap-10 items-center">
			<div class="slide-in-left">
				<div class="flex items-center gap-3 mb-4">
					<h2 class="text-5xl font-semibold" style="color: white;">Meet</h2>
					<img src={auracareLogoWhite} alt="Auracare" class="h-8" />
				</div>
				<p class="text-xl meet-text" style="color: rgba(255, 255, 255, 0.8);">{subText}</p>
			</div>
			<div class="grid gap-5 slide-in-right">
				{#each features as feature}
					<Meetlist title={feature.title} description={feature.description} />
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.meet-section {
		position: relative;
		background: linear-gradient(135deg, #2f4ec0, #4b6ef3);
		color: white;
		width: 100vw;
		left: 50%;
		right: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
		overflow: hidden;
	}

	.meet-section::before {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.25), transparent 45%);
		opacity: 0.8;
		pointer-events: none;
		z-index: 0;
	}

	.meet-text {
		font-size: 1.25rem;
		line-height: 1.75;
	}
</style>
