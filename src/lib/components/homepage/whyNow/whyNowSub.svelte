<script lang="ts">
	const title = 'Technology is ready';
	const subtext =
		'Advances in AI, low-cost imaging hardware, and digitisation of clinical pathways make safe and scalable triage possible today.';

	// Icon URL from Figma design
	const iconUrl = 'https://www.figma.com/api/mcp/asset/c6ad310a-2176-40de-b074-a320a6d55f89';
</script>

<div class="why-now-card fade-in relative overflow-hidden">
	<!-- Decorative icon -->
	<img
		src={iconUrl}
		alt=""
		class="absolute bottom-0 right-0 w-36 h-36 opacity-30 pointer-events-none"
		style="max-width: none;"
	/>

	<div class="relative z-10">
		<h3 class="text-2xl font-bold mb-3 text-white">
			{title}
		</h3>
		<p class="text-base text-white opacity-80 leading-6">
			{subtext}
		</p>
	</div>
</div>
