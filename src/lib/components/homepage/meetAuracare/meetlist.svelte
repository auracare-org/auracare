<script lang="ts">
	import { IconFileText } from '@tabler/icons-svelte';

	let { title, description }: { title: string; description: string } = $props();
</script>

<div
	class="flex gap-3 items-center w-full"
		style="backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 16px; padding: 8px 18px 8px 8px; box-shadow: var(--shadow-glass-glow);"
>
	<!-- Icon container with stronger glassmorphism -->
	<div
		class="flex-shrink-0 flex items-center justify-center self-stretch"
		style="backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); background: rgba(255, 255, 255, 0.15); border-radius: 12px; padding: 12px; min-width: 48px; box-shadow: var(--shadow-glass-glow);"
	>
		<IconFileText size={24} stroke={1.5} style="color: white;" />
	</div>

	<!-- Content -->
	<div class="flex-1">
		<h4 class="font-bold mb-1" style="font-size: 20px; line-height: 30px; color: white;">
			{title}
		</h4>
		<p style="font-size: 18px; line-height: 26px; color: rgba(255, 255, 255, 0.7);">
			{description}
		</p>
	</div>
</div>
