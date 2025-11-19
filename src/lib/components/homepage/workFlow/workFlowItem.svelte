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
		<IconComponent size={48} stroke={1.5} />
	</div>
	<h3>{title}</h3>
	<p>
		{description}
		{#if link && linkText}
			<a href={link} target="_blank" rel="noopener noreferrer" class="workflow-link">{linkText}</a>.
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
		padding: 2.5rem 1.5rem;
		border-radius: 24px;
		background: rgba(255, 255, 255, 0.85);
		box-shadow: var(--shadow-glass-glow);
		border: 1px solid rgba(111, 134, 255, 0.15);
		backdrop-filter: blur(6px);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.workflow-item:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-glass-glow-strong);
	}

	.icon-container {
		background: linear-gradient(135deg, #4f6fed, #7c8bff);
		border-radius: var(--radius-md);
		padding: 1.25rem;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		width: 80px;
		height: 80px;
		box-shadow: 0 20px 40px rgba(79, 111, 237, 0.35);
	}

	h3 {
		font-size: 1.25rem;
		font-weight: 600;
		color: #111827;
		margin: 0;
	}

	p {
		font-size: 0.975rem;
		font-weight: 500;
		color: #4b5563;
		margin: 0;
		max-width: 280px;
		line-height: 1.5;
	}

	.workflow-link {
		color: #4f6fed;
		font-weight: 600;
		text-decoration: underline;
		text-decoration-color: rgba(79, 111, 237, 0.3);
		text-underline-offset: 2px;
		transition: all 0.2s ease;
	}

	.workflow-link:hover {
		color: #2640a7;
		text-decoration-color: #2640a7;
	}
</style>
