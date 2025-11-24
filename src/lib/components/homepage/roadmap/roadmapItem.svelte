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
		<IconComponent size={32} stroke={2} />
	</div>
	<p class="quarter">{quarter}</p>
	<h3>{title}</h3>
	<p class="description">{description}</p>
</div>

<style>
	.roadmap-item {
		background: linear-gradient(135deg, var(--color-primary-700) 0%, var(--color-primary-400) 100%);
		border-radius: var(--radius-md);
		padding: var(--spacing-xl);
		color: white;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		min-height: 248px;
	}

	.icon-container {
		background: var(--color-white-alpha-10);
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
		border-radius: 12px;
		padding: 12px;
		width: 56px;
		height: 56px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.quarter {
		font-size: 18px;
		line-height: 28px;
		font-weight: 400;
		margin: 0;
		color: var(--color-text-button-primary-default);
	}

	h3 {
		font-size: 18px;
		line-height: 28px;
		font-weight: 700;
		margin: 0;
		color: var(--color-text-button-primary-default);
	}

	.description {
		font-size: 16px;
		line-height: 24px;
		font-weight: 500;
		margin: 0;
		color: var(--color-text-button-primary-default);
		opacity: 0.8;
	}
</style>
