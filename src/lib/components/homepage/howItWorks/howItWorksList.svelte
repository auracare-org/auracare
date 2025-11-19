<script lang="ts">
	let {
		title,
		description,
		stepNumber
	}: { title: string; description: string; stepNumber: number } = $props();
</script>

<div
	class="fade-in flex flex-col h-full"
	style="background: linear-gradient(135deg, #4c6ef5, #5b7cfa); border-radius: 16px; padding: 32px; --fade-delay: {stepNumber *
		0.2}s;"
>
	<!-- Glassmorphic numbered badge -->
	<div
		class="flex items-center justify-center mb-4"
		style="backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); background: rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 12px; width: 52px; height: 52px;"
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
		<p style="font-size: 16px; line-height: 24px; color: rgba(255, 255, 255, 0.8);">
			{description}
		</p>
	</div>
</div>
