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
			0 8px 32px 0 rgba(99, 102, 241, 0.2),
			0 0 0 1px rgba(255, 255, 255, 0.1) inset;
		transition: all 0.3s ease;
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
	}

	.roadmap-item:hover {
		box-shadow:
			0 12px 40px 0 rgba(99, 102, 241, 0.3),
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
		box-shadow: 0 4px 16px 0 rgba(255, 255, 255, 0.1);
	}

	.quarter {
		font-size: 1rem;
		font-weight: 600;
		margin: 0;
		color: white;
		opacity: 0.9;
	}

	h3 {
		font-size: 1.5rem;
		font-weight: 700;
		margin: 0;
		line-height: 1.3;
		color: white;
	}

	.description {
		font-size: 1rem;
		margin: 0;
		color: white;
		opacity: 0.95;
		line-height: 1.5;
	}
</style>
