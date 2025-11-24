<script lang="ts">
	import { IconUsers, IconBrain, IconLockOpen, IconGift } from '@tabler/icons-svelte';

	let { title, description, icon, linkText, link }: {
		title: string;
		description: string;
		icon: string;
		linkText?: string;
		link?: string;
	} = $props();

	const iconMap = {
		IconUsers,
		IconBrain,
		IconLockOpen,
		IconGift
	};

	const IconComponent = iconMap[icon as keyof typeof iconMap];
</script>

<div class="workflow-item">
	<div class="icon-container">
		<IconComponent size={40} stroke={2} />
	</div>
	<h3>{title}</h3>
	<p>
		{description}
		{#if link && linkText}
			<a href={link} target="_blank" rel="noopener noreferrer" class="workflow-link">{linkText}</a>
		{/if}
	</p>
</div>

<style>
	.workflow-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 1rem;
		padding: 0;
	}

	.icon-container {
		background: var(--color-bg-button-primary-default);
		border-radius: var(--radius-md);
		padding: 1.25rem;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		width: 80px;
		height: 80px;
		margin-bottom: 0.5rem;
	}

	h3 {
		font-size: 20px;
		line-height: 28px;
		font-weight: 700;
		color: var(--color-text-header-primary);
		margin: 0;
	}

	p {
		font-size: 16px;
		line-height: 24px;
		font-weight: 400;
		color: var(--color-text-body-primary);
		margin: 0;
		line-height: 1.5;
	}

	.workflow-link {
		color: var(--color-text-header-primary);
		font-weight: 400;
		text-decoration: underline;
		text-decoration-color: var(--color-text-header-primary);
		text-underline-offset: 2px;
		transition: all 0.2s ease;
	}

	.workflow-link:hover {
		color: var(--color-primary-700);
		text-decoration-color: var(--color-primary-700);
	}
</style>
