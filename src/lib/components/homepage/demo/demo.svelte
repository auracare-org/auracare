<script lang="ts">
	import { IconPlayerPlayFilled } from '@tabler/icons-svelte';
</script>

<section class="section demo-section">
	<div class="container">
		<div class="demo-container">
			<!-- Decorative circles matching Figma SVG -->
			<svg class="demo-circles" width="1160" height="480" viewBox="0 0 1160 480" fill="none" xmlns="http://www.w3.org/2000/svg">
				<!-- Center large circles -->
				<g style="mix-blend-mode:screen" opacity="0.2">
					<circle cx="538.759" cy="240.759" r="92.759" fill="white" fill-opacity="0.4"/>
				</g>
				<ellipse opacity="0.2" cx="537.28" cy="239" rx="67.5" ry="68" fill="white" fill-opacity="0.6"/>
				<circle cx="537.103" cy="239.103" r="13.2513" fill="white" fill-opacity="0.6"/>

				<!-- Top right small circles -->
				<g style="mix-blend-mode:screen" opacity="0.2">
					<circle cx="644.5" cy="123.5" r="27.5" fill="white" fill-opacity="0.4"/>
				</g>
				<circle opacity="0.2" cx="643.875" cy="122.875" r="17.5" fill="white" fill-opacity="0.6"/>
				<circle cx="643.875" cy="122.875" r="8.75" fill="white" fill-opacity="0.6"/>

				<!-- Bottom left medium circles -->
				<g style="mix-blend-mode:screen" opacity="0.2">
					<circle cx="429.5" cy="398.5" r="64.5" fill="white" fill-opacity="0.4"/>
				</g>
				<circle opacity="0.2" cx="428.26" cy="397.26" r="34.7308" fill="white" fill-opacity="0.6"/>
				<circle cx="428.26" cy="397.26" r="17.3654" fill="white" fill-opacity="0.6"/>

				<!-- Top left large circles -->
				<g style="mix-blend-mode:screen" opacity="0.2">
					<circle cx="30" cy="48" r="176" fill="white" fill-opacity="0.4"/>
				</g>
				<circle opacity="0.2" cx="26.615" cy="44.6154" r="94.7692" fill="white" fill-opacity="0.6"/>

				<!-- Bottom right large circles -->
				<g style="mix-blend-mode:screen" opacity="0.2">
					<circle cx="1144" cy="480" r="236" fill="white" fill-opacity="0.4"/>
				</g>
				<circle opacity="0.2" cx="1139.46" cy="475.462" r="127.077" fill="white" fill-opacity="0.6"/>
			</svg>

			<button
				class="demo-button"
				onclick={() => {
					// Add video modal logic here
					window.open('https://pathways.auracarehealth.com/', '_blank');
				}}
				aria-label="Watch demo video"
			>
				<div class="demo-play-icon">
					<IconPlayerPlayFilled size={28} class="play-icon" />
				</div>
				<div class="demo-text">
					<p class="demo-title">Watch the demo</p>
					<div class="demo-meta">
						<span class="demo-duration">5 mins</span>
						<span class="demo-dot"></span>
						<span class="demo-cta">Play video</span>
					</div>
				</div>
			</button>
		</div>
	</div>
</section>

<style>
	.demo-section {
		background: white;
		padding: 120px 0;
	}

	.demo-container {
		background: var(--color-bg-button-primary-default);
		border-radius: 24px;
		height: 480px;
		position: relative;
		overflow: hidden;
		border: 1px solid #d2d5e2;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* Grid pattern SVG background */
	.demo-container::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: url("data:image/svg+xml,%3Csvg width='1160' height='480' viewBox='0 0 1160 480' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-190 -314H-78V-477h2v163h112V-477h2v163h110V-477h2v163h114V-477h2v163h112V-477h2v163h114V-477h2v163h110V-477h2v163h114V-477h2v163h110V-477h2v163h114V-477h2v163h112V-477h2v163h157v2h-157v113h157v2h-157v113h157v2h-157v113h157v2h-157v113h157v2h-157v177h-2v-177h-112v177h-2v-177h-110v177h-2v-177h-114v177h-2v-177h-112v177h-2v-177h-114v177h-2v-177h-110v177h-2v-177h-112v177h-2v-177h-114v177h-2v-177h-110v177h-2v-177h-114v177h-2v-177h-112v177h-2v-177h-158v-2h158v-113h-158v-2h158v-113h-158v-2h158v-113h-158v-2h158v-113h-158v-2h158V-83l-158.001-.001v-2l158.001.001v-113h-158v-2h158v-113h-158v-2h158V-477h2v163z' fill='url(%23paint0_radial)' stroke='%23EDECF3' stroke-width='2'/%3E%3Cdefs%3E%3CradialGradient id='paint0_radial' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(575 1247) rotate(180) scale(1300 1234)'%3E%3Cstop stop-color='%23EDECF3'/%3E%3Cstop offset='1' stop-color='%23E6E5F5' stop-opacity='0.01'/%3E%3C/radialGradient%3E%3C/defs%3E%3C/svg%3E");
		background-size: cover;
		background-position: center;
		pointer-events: none;
		opacity: 0.03;
	}

	/* Color burn overlay */
	.demo-container::after {
		content: '';
		position: absolute;
		inset: 0;
		background: var(--color-primary-500);
		opacity: 0.1;
		mix-blend-mode: color-burn;
		pointer-events: none;
	}

	.demo-circles {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	.demo-button {
		position: relative;
		z-index: 10;
		background: rgba(255, 255, 255, 0.98);
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
		border: 12px solid rgba(195, 209, 255, 0.35);
		border-radius: 48px;
		padding: 12px 24px 12px 12px;
		display: flex;
		align-items: center;
		gap: 12px;
		cursor: pointer;
		transition: all 0.3s ease;
		box-shadow:
			0 20px 40px rgba(47, 78, 192, 0.25),
			0 0 0 1px rgba(255, 255, 255, 0.1);
	}

	.demo-button:hover {
		transform: translateY(-2px);
		box-shadow:
			0 25px 50px rgba(47, 78, 192, 0.35),
			0 0 0 1px rgba(255, 255, 255, 0.2);
		border-color: rgba(195, 209, 255, 0.45);
	}

	.demo-play-icon {
		width: 60px;
		height: 60px;
		background: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.demo-play-icon :global(.play-icon) {
		color: var(--color-primary-500);
		margin-left: 3px;
	}

	.demo-text {
		display: flex;
		flex-direction: column;
		gap: 2px;
		text-align: left;
	}

	.demo-title {
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		font-size: 18px;
		line-height: 28px;
		color: var(--color-text-header-secondary);
	}

	.demo-meta {
		display: flex;
		align-items: center;
		gap: 8px;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
	}

	.demo-duration {
		color: var(--color-text-body-primary);
		opacity: 0.8;
	}

	.demo-dot {
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: var(--color-text-body-secondary);
	}

	.demo-cta {
		color: var(--color-bg-button-primary);
	}

	@media (max-width: 640px) {
		.demo-button {
			flex-direction: column;
			text-align: center;
			padding: 16px;
			gap: 16px;
		}

		.demo-text {
			align-items: center;
		}
	}
</style>
