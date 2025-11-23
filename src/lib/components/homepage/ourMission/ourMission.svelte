<script lang="ts">
	import ourMissionImg from './ourMission.png';
</script>

<section class="mission-section">
	<!-- Decorative circles - top left -->
	<svg class="decorative-circles top-left" width="352" height="352" viewBox="0 0 352 352" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g style="mix-blend-mode:screen" opacity="0.2">
			<circle cx="176" cy="176" r="176" fill="white" fill-opacity="0.4"/>
		</g>
		<circle opacity="0.2" cx="176" cy="176" r="94.769" fill="white" fill-opacity="0.6"/>
	</svg>

	<!-- Decorative circles - bottom right -->
	<svg class="decorative-circles bottom-right" width="352" height="352" viewBox="0 0 352 352" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g style="mix-blend-mode:screen" opacity="0.2">
			<circle cx="176" cy="176" r="176" fill="white" fill-opacity="0.4"/>
		</g>
		<circle opacity="0.2" cx="176" cy="176" r="94.769" fill="white" fill-opacity="0.6"/>
	</svg>

	<div class="mission-container">
		<div class="mission-content">
			<!-- Left side: Illustration -->
			<div class="illustration-wrapper">
				<img src={ourMissionImg} alt="Healthcare worker" class="illustration" />
			</div>

			<!-- Right side: Text content -->
			<div class="text-content">
				<h2 class="mission-title">Our mission</h2>

				<div class="mission-text">
					<p>
						Auracare's mission is to help healthcare workers and systems where they are needed. We
						<strong>fast, accurate primary care</strong>
						away from overstretched hospitals and clinics and into
						<strong>local community spaces.</strong>
					</p>

					<p>
						We achieve this by equipping these locations - be it a local pharmacy, a school nurse
						office, or a care home - with the tools needed to
						<strong>diagnose, triage and integrate with their wider healthcare systems.</strong>
					</p>

					<p>
						We don't replace doctors. We support their work by ensuring that the patients that reach
						them , reducing waiting times and unnecessary appointments
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.mission-section {
		background: var(--color-bg-button-primary-default);
		padding: 120px 72.5px;
		position: relative;
		overflow: hidden;
		width: 100vw;
		margin-left: calc(-50vw + 50%);
		margin-right: calc(-50vw + 50%);
	}

	.decorative-circles {
		position: absolute;
		pointer-events: none;
		width: 352px;
		height: 352px;
	}

	.decorative-circles.top-left {
		left: -176px;
		top: -176px;
	}

	.decorative-circles.bottom-right {
		right: -176px;
		bottom: -176px;
	}

	.mission-container {
		max-width: 1160px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	.mission-content {
		display: flex;
		gap: 32px;
		align-items: flex-start;
	}

	.illustration-wrapper {
		width: 521px;
		height: 377px;
		flex-shrink: 0;
	}

	.illustration {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.text-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 8.587px;
	}

	.mission-title {
		font-family: 'Poppins', sans-serif;
		font-size: 48px;
		font-weight: 700;
		line-height: 64px;
		color: #fafafa;
		margin: 0 0 12px 0;
	}

	.mission-text {
		display: flex;
		flex-direction: column;
		gap: 12px;
		max-width: 568px;
	}

	.mission-text p {
		font-family: 'Poppins', sans-serif;
		font-size: 20px;
		font-weight: 400;
		line-height: 28px;
		color: rgba(255, 255, 255, 0.8);
		margin: 0;
	}

	.mission-text strong {
		font-weight: 700;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.mission-section {
			padding: 60px 24px;
		}

		.mission-content {
			flex-direction: column;
			gap: 24px;
		}

		.illustration-wrapper {
			width: 100%;
			height: auto;
		}

		.mission-title {
			font-size: 36px;
			line-height: 48px;
		}

		.mission-text {
			max-width: 100%;
		}

		.mission-text p {
			font-size: 18px;
			line-height: 26px;
		}
	}
</style>
