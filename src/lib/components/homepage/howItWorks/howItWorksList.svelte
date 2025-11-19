<script lang="ts">
	let {
		title,
		description,
		stepNumber
	}: { title: string; description: string; stepNumber: number } = $props();
</script>

<div
	class="fade-in flex flex-col h-full how-card"
	style="background: linear-gradient(135deg, #4c6ef5, #5b7cfa); border-radius: 16px; padding: 32px; --fade-delay: {stepNumber *
		0.2}s;"
>
	<!-- Glassmorphic numbered badge -->
	<div
		class="flex items-center justify-center mb-4"
		style="backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); background: rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 12px; width: 52px; height: 52px; box-shadow: var(--shadow-glass-glow);"
	>
		<p class="font-bold" style="font-size: 18px; line-height: 28px; color: white;">
			{stepNumber}
		</p>
	</div>

	<!-- Content -->
	<div class="flex flex-col gap-1">
		<h3 class="font-bold" style="font-size: 18px; line-height: 28px; color: white;">
			{title}
		</h3>
		<p class="card-copy">
			{description}
		</p>
	</div>
</div>

<style>
	.how-card {
		box-shadow: var(--shadow-glass-glow);
		border: 1px solid rgba(255, 255, 255, 0.15);
		position: relative;
		overflow: hidden;
	}

	.how-card::after {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at 80% 0%, rgba(255, 255, 255, 0.18), transparent 50%);
		pointer-events: none;
	}

	.card-copy {
		font-size: 16px;
		line-height: 24px;
		color: rgba(255, 255, 255, 0.82);
	}
</style>
