<script lang="ts">
	import { IconFlask, IconCalendar, IconFileText, IconAward } from '@tabler/icons-svelte';

	let {
		quarter,
		title,
		description,
		icon
	}: {
		quarter: string;
		title: string;
		description: string;
		icon: string;
	} = $props();

	const iconMap = {
		IconFlask,
		IconCalendar,
		IconFileText,
		IconAward
	};

	const IconComponent = iconMap[icon as keyof typeof iconMap];
</script>

<div class="roadmap-item">
	<div class="icon-container">
		<IconComponent size={48} stroke={1.5} />
	</div>
	<p class="quarter">{quarter}</p>
	<h3>{title}</h3>
	<p class="description">{description}</p>
</div>

<style>
	.roadmap-item {
		background: linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-primary-400) 100%);
		border-radius: var(--radius-md);
		padding: 2rem;
		color: white;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		min-height: 280px;
		box-shadow:
			var(--shadow-glass-glow),
			0 0 0 1px rgba(255, 255, 255, 0.1) inset;
		transition: all 0.3s ease;
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
	}

	.roadmap-item:hover {
		box-shadow:
			var(--shadow-glass-glow-strong),
			0 0 0 1px rgba(255, 255, 255, 0.2) inset;
		transform: translateY(-4px);
	}

	.icon-container {
		background: rgba(255, 255, 255, 0.25);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-radius: 12px;
		padding: 1rem;
		width: fit-content;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: var(--shadow-glass-glow);
	}

	.quarter {
		font-size: 1.125rem;
		font-weight: 600;
		margin: 0;
		color: white;
		opacity: 0.9;
	}

	h3 {
		font-size: 1.75rem;
		font-weight: 700;
		margin: 0;
		line-height: 1.3;
		color: white;
	}

	.description {
		font-size: 1.125rem;
		margin: 0;
		color: white;
		opacity: 0.95;
		line-height: 1.6;
	}
</style>
