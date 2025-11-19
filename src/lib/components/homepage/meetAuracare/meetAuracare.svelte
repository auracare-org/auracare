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

<section
	class="section flex items-center justify-center px-4 md:px-8"
	style="background: #fafafa; padding-top: 80px; padding-bottom: 80px;"
>
	<div
		class="relative overflow-hidden w-full"
		style="background: #2f4ec0; border-radius: 32px; padding: 60px; max-width: 1400px;"
	>
		<!-- Sine wave background animation -->
		<SineWave />

		<div class="relative z-10">
			<div class="grid md:grid-cols-2 gap-10 items-center">
				<!-- Left side: Text with logo -->
				<div class="slide-in-left">
					<div class="flex items-center gap-3 mb-4">
						<h2 class="text-5xl font-semibold" style="color: white;">Meet</h2>
						<img src={auracareLogoWhite} alt="Auracare" class="h-8" />
					</div>
					<p class="text-lg" style="color: rgba(255, 255, 255, 0.8);">{subText}</p>
				</div>

				<!-- Right side: Features grid -->
				<div class="grid gap-5 slide-in-right">
					{#each features as feature}
						<Meetlist title={feature.title} description={feature.description} />
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
