<script lang="ts">
	let { title, description, iconIndex }: { title: string; description: string; iconIndex: number } =
		$props();

	// Icon paths for local SVG files
	const icons = [
		'/SVG/whynow-healthcare-systems.svg', // Healthcare systems
		'/SVG/whynow-community-providers.svg', // Community providers
		'/SVG/whynow-patient-expectations.svg', // Patient expectations
		'/SVG/whynow-technology-ready.svg' // Technology is ready
	];
</script>

<div class="why-now-card fade-in relative overflow-hidden">
	<!-- Decorative icon -->
	<img
		src={icons[iconIndex]}
		alt=""
		class="absolute right-1 w-48 h-48 opacity-30 pointer-events-none {iconIndex === 0
			? 'bottom-[-45px]'
			: 'bottom-[-35px]'}"
		style="max-width: none;"
	/>

	<div class="relative z-10">
		<h3 class="text-2xl font-bold mb-3 card-title">
			{title}
		</h3>
		<p class="text-base leading-6 card-text">
			{description}
		</p>
	</div>
</div>

<style>
	.card-title {
		color: var(--color-text-button-primary-default);
	}

	.card-text {
		color: var(--color-text-button-primary-default);
		opacity: 0.8;
	}
</style>
