<script lang="ts">
	let {
		title,
		description,
		stepNumber
	}: { title: string; description: string; stepNumber: number } = $props();
</script>

<div class="fade-in flex flex-col h-full how-card" style="--fade-delay: {stepNumber * 0.2}s;">
	<!-- Glassmorphic numbered badge -->
	<div class="flex items-center justify-center mb-4 number-badge">
		<p class="font-bold number-text">
			{stepNumber}
		</p>
	</div>

	<!-- Content -->
	<div class="flex flex-col gap-1">
		<h3 class="font-bold card-title">
			{title}
		</h3>
		<p class="card-copy">
			{description}
		</p>
	</div>
</div>

<style>
	.how-card {
		background: var(--color-bg-button-primary-default);
		border-radius: var(--radius-md);
		padding: var(--spacing-xl);
		box-shadow: var(--shadow-glass-glow);
		border: 1px solid var(--color-white-alpha-15);
		position: relative;
		overflow: hidden;
	}

	.how-card::after {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(
			circle at 80% 0%,
			var(--color-white-alpha-15),
			transparent 50%
		);
		pointer-events: none;
	}

	.number-badge {
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
		background: var(--color-white-alpha-10);
		border-radius: 12px;
		padding: 12px;
		width: 52px;
		height: 52px;
		box-shadow: var(--shadow-glass-glow);
	}

	.number-text {
		font-size: 18px;
		line-height: 28px;
		color: var(--color-text-button-primary-default);
	}

	.card-title {
		font-size: 18px;
		line-height: 28px;
		color: var(--color-text-button-primary-default);
	}

	.card-copy {
		font-size: 16px;
		line-height: 24px;
		color: var(--color-text-button-primary-default);
		opacity: 0.8;
	}
</style>
