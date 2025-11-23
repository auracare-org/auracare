<script lang="ts">
	import auracareLogoWhite from './whiteAuracare.svg';
	import meetAuracareBackground from './meetAuracareBackground.png';
	import { IconFileCheck, IconGitMerge, IconBrain } from '@tabler/icons-svelte';

	const features = [
		{
			title: 'Automated clinical assessments',
			description:
				'We automatically record and document consults using PGD pathways. No paperwork!',
			icon: IconFileCheck
		},
		{
			title: 'End-to-end workflow integration',
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

<section class="meet-section-wrapper">
	<div class="meet-section">
		<!-- Background image -->
		<img src={meetAuracareBackground} alt="" class="background-image" />

		<div class="meet-grid">
			<!-- Left Column -->
			<div class="meet-left">
				<div class="meet-title-wrapper">
					<h2 class="meet-title">Meet</h2>
					<img src={auracareLogoWhite} alt="Auracare" class="auracare-logo" />
				</div>
				<p class="meet-description">
					Our digitally enhanced triage tools help primary care providers diagnose without the
					need for an on-site doctor.
				</p>
			</div>

			<!-- Right Column - Feature Cards -->
			<div class="meet-right">
				{#each features as feature}
					<div class="feature-card">
						<div class="feature-icon-wrapper">
							<svelte:component this={feature.icon} size={24} stroke={2} class="feature-icon" />
						</div>
						<div class="feature-content">
							<h3 class="feature-title">{feature.title}</h3>
							<p class="feature-description">{feature.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.meet-section-wrapper {
		background: white;
		padding: 120px 140px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.meet-section {
		background: #2f4ec0;
		padding: 60px;
		position: relative;
		overflow: hidden;
		max-width: 1204px;
		width: 100%;
		border-radius: 32px;
	}

	.background-image {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 879px;
		height: auto;
		opacity: 0.5;
		pointer-events: none;
		z-index: 0;
		object-fit: contain;
	}

	.meet-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 40px;
		align-items: center;
		justify-content: space-between;
		position: relative;
		z-index: 1;
	}

	.meet-left {
		display: flex;
		flex-direction: column;
		gap: 14px;
		min-width: 360px;
	}

	.meet-title-wrapper {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.meet-title {
		font-family: 'Poppins', sans-serif;
		font-size: 48px;
		font-weight: 600;
		line-height: 1.16;
		color: white;
		margin: 0;
		white-space: nowrap;
	}

	.auracare-logo {
		height: 31.264px;
		width: 239.68px;
	}

	.meet-description {
		font-family: 'Poppins', sans-serif;
		font-size: 18px;
		font-weight: 500;
		line-height: 28px;
		color: rgba(255, 255, 255, 0.8);
		margin: 0;
		max-width: 419px;
	}

	.meet-right {
		display: flex;
		flex-direction: column;
		gap: 20px;
		min-width: 360px;
	}

	.feature-card {
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 16px;
		padding: 8px 18px 8px 8px;
		display: flex;
		gap: 12px;
		align-items: center;
		width: 472px;
		min-height: 120px;
		text-align: left;
	}

	.feature-card:nth-child(3) {
		min-height: 137px;
	}

	.feature-icon-wrapper {
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
		border-radius: 12px;
		padding: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		align-self: stretch;
		min-height: 100%;
	}

	.feature-icon-wrapper :global(.feature-icon) {
		color: white;
	}

	.feature-content {
		display: flex;
		flex-direction: column;
		gap: 0px;
		flex: 1;
		justify-content: center;
		text-align: left;
	}

	.feature-title {
		font-family: 'Poppins', sans-serif;
		font-size: 18px;
		font-weight: 700;
		line-height: 28px;
		color: white;
		margin: 0;
		text-align: left;
	}

	.feature-description {
		font-family: 'Poppins', sans-serif;
		font-size: 16px;
		font-weight: 500;
		line-height: 24px;
		color: rgba(255, 255, 255, 0.7);
		margin: 0;
		text-align: left;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.meet-section-wrapper {
			padding: 0 24px 60px 24px;
		}

		.meet-section {
			padding: 40px 24px;
		}

		.meet-grid {
			grid-template-columns: 1fr;
			gap: 32px;
		}

		.meet-left,
		.meet-right {
			min-width: auto;
		}

		.meet-title {
			font-size: 36px;
		}

		.auracare-logo {
			height: 20px;
			width: auto;
		}

		.meet-description {
			max-width: 100%;
		}
	}
</style>
