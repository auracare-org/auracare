<script lang="ts">
	import {
		IconUsers,
		IconBrain,
		IconLock,
		IconHeartHandshake
	} from '@tabler/icons-svelte';

	interface Feature {
		icon: typeof IconUsers;
		title: string;
		description: string;
		hasLink?: boolean;
	}

	const features: Feature[] = [
		{
			icon: IconUsers,
			title: 'Clinician-led design',
			description: 'Built with care workers, not against them'
		},
		{
			icon: IconBrain,
			title: 'Simple operation',
			description: 'No additional training required for use'
		},
		{
			icon: IconLock,
			title: 'Open source',
			description: 'Transparently built.',
			hasLink: true
		},
		{
			icon: IconHeartHandshake,
			title: 'Free to use',
			description: 'Free software and support on purchase of hardware'
		}
	];
</script>

<section class="trust-section">
	<div class="trust-heading">
		<h2 class="trust-title">Tailored to your workflow.</h2>
	</div>

	<div class="trust-container">
		{#each features as feature}
			<div class="trust-item">
				<div class="trust-icon-bg">
					<div class="trust-icon-wrapper">
						<svelte:component this={feature.icon} size={40} stroke={2} />
					</div>
				</div>
				<div class="trust-text-wrapper">
					<h3 class="trust-item-title">{feature.title}</h3>
				</div>
				<div class="trust-desc-wrapper">
					<p class="trust-description">
						{#if feature.hasLink}
							<span>Transparently built. <a href="https://github.com/auracare-org" target="_blank" rel="noopener noreferrer" class="trust-link">Find code and documentation here.</a></span>
						{:else}
							{feature.description}
						{/if}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.trust-section {
		background: white;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		gap: 64px;
		align-items: center;
		padding: 120px 105px;
		width: 100%;
	}

	.trust-heading {
		height: 48px;
		width: 1216px;
		position: relative;
	}

	.trust-title {
		position: absolute;
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
		font-size: 48px;
		line-height: 48px;
		color: var(--color-text-header-primary);
		text-align: center;
		white-space: nowrap;
		left: 50%;
		top: 2px;
		transform: translateX(-50%);
		margin: 0;
	}

	.trust-container {
		display: grid;
		grid-template-columns: repeat(4, minmax(0px, 1fr));
		grid-template-rows: repeat(1, minmax(0px, 1fr));
		gap: 40px;
		height: auto;
		min-height: 180px;
		width: 1216px;
		max-width: 100%;
	}

	.trust-item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.trust-icon-bg {
		box-sizing: border-box;
		display: flex;
		gap: 16px;
		align-items: center;
		justify-content: center;
		padding: 32px;
		border-radius: 16px;
		width: 80px;
		height: 80px;
		background: var(--color-bg-button-primary-default);
		margin: 0 auto 16px;
	}

	.trust-icon-wrapper {
		width: 40px;
		height: 40px;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.trust-text-wrapper {
		display: flex;
		min-height: 28px;
		align-items: flex-start;
		width: 100%;
	}

	.trust-item-title {
		flex: 1 1 0%;
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		font-size: 20px;
		line-height: 28px;
		color: var(--color-text-header-primary);
		text-align: center;
		margin: 0;
		min-height: 1px;
		min-width: 1px;
	}

	.trust-desc-wrapper {
		min-height: 48px;
		width: 100%;
		margin-top: 4px;
	}

	.trust-description {
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: #4a5565;
		text-align: center;
		margin: 0;
		width: 100%;
	}

	.trust-link {
		text-decoration: underline;
		text-decoration-skip-ink: none;
		text-underline-position: from-font;
		color: inherit;
	}

	.trust-link:hover {
		color: var(--color-text-header-primary);
	}

	/* Responsive */
	@media (max-width: 1200px) {
		.trust-section {
			padding: 80px 40px;
		}

		.trust-heading {
			width: 100%;
			max-width: 1216px;
		}

		.trust-container {
			width: 100%;
			max-width: 1024px;
		}
	}

	@media (max-width: 768px) {
		.trust-section {
			padding: 60px 24px;
		}

		.trust-container {
			grid-template-columns: 1fr;
			height: auto;
			gap: 48px;
		}

		.trust-item {
			height: 180px;
		}

		.trust-title {
			font-size: 36px;
			line-height: 40px;
			white-space: normal;
		}
	}
</style>
