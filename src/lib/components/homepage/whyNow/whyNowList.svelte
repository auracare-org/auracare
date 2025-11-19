<script lang="ts">
	let { title, description, iconIndex }: { title: string; description: string; iconIndex: number } =
		$props();

	// Icon URLs from Figma design
	const icons = [
		'https://www.figma.com/api/mcp/asset/9786fb28-8650-4d75-b16f-7033079a6382', // Healthcare systems
		'https://www.figma.com/api/mcp/asset/b669b811-0580-453b-a3e3-162733a03450', // Community providers
		'https://www.figma.com/api/mcp/asset/90917c0c-bc7b-4efd-bea3-a6baad400a96', // Patient expectations
		'https://www.figma.com/api/mcp/asset/c6ad310a-2176-40de-b074-a320a6d55f89' // Technology is ready
	];
</script>

<div class="why-now-card fade-in relative overflow-hidden">
	<!-- Decorative icon -->
	<img
		src={icons[iconIndex]}
		alt=""
		class="absolute bottom-0 right-0 w-32 h-32 opacity-30 pointer-events-none"
		style="max-width: none;"
	/>

	<div class="relative z-10">
		<h3 class="text-2xl font-bold mb-3 text-white">
			{title}
		</h3>
		<p class="text-base text-white opacity-80 leading-6">
			{description}
		</p>
	</div>
</div>
