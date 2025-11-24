<script lang="ts">
	import Meetlist from './meetlist.svelte';
	import SineWave from './meetAuracarePulse.svelte';
	import auracareLogoWhite from './whiteAuracare.svg';
	import { IconClipboardCheck, IconGitMerge, IconBrain } from '@tabler/icons-svelte';

	const subText =
		'Our digitally enhanced triage tools help primary care providers diagnose without the need for an on-site doctor.';

	const features = [
		{
			title: 'Automated Clinical Assessments',
			description:
				'We automatically record and document consults using PGD pathways. No paperwork!',
			icon: IconClipboardCheck
		},
		{
			title: 'End-to-End Workflow Integration',
			description:
				'Notes, prescriptions, referrals and NHS submissions generated and sent in one seamless flow.',
			icon: IconGitMerge
		},
		{
			title: 'AI Assisted Consultations',
			description:
				'Our AI models help care workers diagnose visual conditions faster and more accurately, with a full audit trail.',
			icon: IconBrain
		}
	];
</script>

<section class="section meet-section">
	<SineWave />
	<div class="container relative" style="z-index: 10;">
		<div class="grid md:grid-cols-2 gap-10 items-center">
			<div class="slide-in-left">
				<div class="flex items-center gap-3 mb-4">
					<h2 class="text-5xl font-semibold" style="color: var(--color-text-button-primary-default);">Meet</h2>
					<img src={auracareLogoWhite} alt="Auracare" class="h-8" />
				</div>
				<p class="text-xl meet-text meet-subtext">{subText}</p>
			</div>
			<div class="grid gap-5 slide-in-right">
				{#each features as feature}
					<Meetlist title={feature.title} description={feature.description} icon={feature.icon} />
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.meet-section {
		position: relative;
		background: var(--color-bg-button-primary-default);
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
		background: radial-gradient(
			circle at 80% 20%,
			var(--color-white-alpha-15),
			transparent 45%
		);
		opacity: 0.6;
		pointer-events: none;
		z-index: 0;
	}

	.meet-section::after {
		content: '';
		position: absolute;
		inset: 0;
		background: var(--color-primary-alpha-10);
		mix-blend-mode: color-burn;
		pointer-events: none;
		z-index: 1;
	}

	.meet-text {
		font-size: 1.25rem;
		line-height: 1.75;
	}

	.meet-subtext {
		color: var(--color-white-alpha-80);
	}
</style>
