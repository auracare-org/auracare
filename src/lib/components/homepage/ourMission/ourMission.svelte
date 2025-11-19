<script lang="ts">
	import ourMissionImg from './ourMission.png';
</script>

<section class="section" style="background: linear-gradient(135deg, #4c6ef5 0%, #5b7cfa 100%);">
	<div class="container">
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<!-- Left side: Illustration -->
			<div class="slide-in-left flex items-center justify-center">
				<img src={ourMissionImg} alt="Healthcare worker" class="w-full" style="max-width: 600px;" />
			</div>

			<!-- Right side: Text content -->
			<div class="slide-in-right">
				<h2 class="text-4xl md:text-5xl font-bold mb-6" style="color: white;">Our mission</h2>

				<div class="space-y-6 text-lg">
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
