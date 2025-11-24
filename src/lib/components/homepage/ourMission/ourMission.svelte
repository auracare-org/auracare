<script lang="ts">
	import ourMissionImg from './ourMission.png';
</script>

<section class="section mission-section">
	<!-- Animated bubbles -->
	<span class="bubble mission-bubble mission-bubble-1" style="--bubble-size: 180px; top: 10%; right: 15%;"></span>
	<span class="bubble mission-bubble mission-bubble-2" style="--bubble-size: 120px; top: 25%; right: 8%;"></span>
	<span class="bubble mission-bubble mission-bubble-3" style="--bubble-size: 250px; bottom: 15%; left: 10%;"></span>
	<span class="bubble mission-bubble mission-bubble-4" style="--bubble-size: 90px; bottom: 35%; left: 25%;"></span>
	<span class="bubble mission-bubble mission-bubble-5" style="--bubble-size: 140px; top: 60%; right: 25%;"></span>
	
	<div class="container relative z-10">
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<!-- Left side: Illustration -->
			<div class="slide-in-left flex items-center justify-center illustration-shell">
				<img src={ourMissionImg} alt="Healthcare worker" class="w-full illustration" />
			</div>

			<!-- Right side: Text content -->
			<div class="slide-in-right">
				<h2 class="text-4xl md:text-5xl font-bold mb-6" style="color: white;">Our mission</h2>

				<div class="space-y-6 mission-text">
					<p style="color: white;">
						Auracare's mission is to help healthcare workers and systems where they are needed. We
						shift
						<strong>fast, accurate primary care</strong>
						away from overstretched hospitals and clinics, into
						<strong>local community spaces.</strong>
					</p>

					<p style="color: white;">
						We achieve this by equipping these locations - be it a local pharmacy, a school nurse
						office, or a care home - with the tools needed to
						<strong>diagnose, triage and refer patients to the wider healthcare systems.</strong>
					</p>

					<p style="color: white;">
						We don't replace doctors. We support their work by ensuring the patients reach them,
						reducing waiting times and unnecessary appointments.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.mission-section {
		position: relative;
		background: linear-gradient(135deg, #3a5de6 0%, #4d6ff7 35%, #6280ff 100%);
		color: white;
		width: 100vw;
		left: 50%;
		right: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
		overflow: hidden;
	}

	.mission-text {
		font-size: 1.25rem;
		line-height: 1.75;
	}

	.mission-text p {
		font-size: 1.25rem;
	}

	.illustration-shell {
		position: relative;
	}

	.illustration-shell::after {
		content: '';
		position: absolute;
		inset: 12%;
		border-radius: 100%;
		border: 1px solid rgba(255, 255, 255, 0.2);
	}

	.illustration {
		max-width: 560px;
		filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.2));
	}

	.mission-bubble {
		background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.05));
		backdrop-filter: blur(4px);
		border: 1px solid rgba(255, 255, 255, 0.15);
	}

	@keyframes mission-float {
		0%, 100% {
			transform: translateY(0) translateX(0);
		}
		25% {
			transform: translateY(-12px) translateX(6px);
		}
		50% {
			transform: translateY(-5px) translateX(-4px);
		}
		75% {
			transform: translateY(-18px) translateX(-6px);
		}
	}

	@keyframes mission-drift {
		0%, 100% {
			transform: translateY(0) translateX(0) scale(1);
		}
		33% {
			transform: translateY(8px) translateX(-12px) scale(1.05);
		}
		66% {
			transform: translateY(-6px) translateX(10px) scale(0.95);
		}
	}

	@keyframes mission-pulse {
		0%, 100% {
			transform: scale(1) translateY(0);
			opacity: 0.8;
		}
		50% {
			transform: scale(1.08) translateY(-8px);
			opacity: 0.6;
		}
	}

	.mission-bubble-1 {
		animation: mission-float 22s ease-in-out infinite;
	}

	.mission-bubble-2 {
		animation: mission-drift 18s ease-in-out infinite;
		animation-delay: -3s;
	}

	.mission-bubble-3 {
		animation: mission-pulse 20s ease-in-out infinite;
		animation-delay: -8s;
	}

	.mission-bubble-4 {
		animation: mission-drift 25s ease-in-out infinite;
		animation-delay: -12s;
	}

	.mission-bubble-5 {
		animation: mission-float 16s ease-in-out infinite;
		animation-delay: -5s;
	}
</style>
