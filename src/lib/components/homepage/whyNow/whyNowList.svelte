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
		class="decorative-icon"
	/>

	<div class="relative z-10">
		<h3 class="card-title">
			{title}
		</h3>
		<p class="card-description">
			{description}
		</p>
	</div>
</div>

<style>
	.decorative-icon {
		position: absolute;
		bottom: -25px;
		right: -2.5px;
		width: 120px;
		height: 120px;
		opacity: 0.4;
		pointer-events: none;
		max-width: none;
		object-fit: contain;
	}

	.card-title {
		font-family: 'Poppins', sans-serif;
		font-size: 26px;
		font-weight: 700;
		line-height: 31px;
		color: white;
		margin-bottom: 8px;
		position: relative;
		z-index: 10;
	}

	.card-description {
		font-family: 'Poppins', sans-serif;
		font-size: 16px;
		font-weight: 500;
		line-height: 24px;
		color: rgba(255, 255, 255, 0.8);
		position: relative;
		z-index: 10;
	}
</style>
