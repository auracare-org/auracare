<script lang="ts">
	import ourMissionImg from './ourMission.png';
</script>

<section class="section mission-section">
	<div class="container">
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
						deliver
						<strong>fast, accurate primary care</strong>
						away from overstretched hospitals and clinics and into
						<strong>local community spaces.</strong>
					</p>

					<p style="color: white;">
						We achieve this by equipping these locations - be it a local pharmacy, a school nurse
						office, or a care home - with the tools needed to
						<strong>diagnose, triage and integrate with their wider healthcare systems.</strong>
					</p>

					<p style="color: white;">
						We don't replace doctors. We support their work by ensuring that the patients that reach
						them, reducing waiting times and unnecessary appointments
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
</style>
