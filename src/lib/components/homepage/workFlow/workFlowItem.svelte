<script lang="ts">
	import { IconUsers, IconBrain, IconLockOpen, IconGift } from '@tabler/icons-svelte';

	let { title, description, icon }: { title: string; description: string; icon: string } = $props();

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
	<p>{description}</p>
</div>

<style>
	.workflow-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 1rem;
	}

	.icon-container {
		background-color: var(--color-primary-500);
		border-radius: var(--radius-md);
		padding: 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		width: 80px;
		height: 80px;
	}

	h3 {
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--color-text-header-primary);
		margin: 0;
	}

	p {
		font-size: 0.9375rem;
		font-weight: 500;
		color: var(--color-text-body-secondary);
		margin: 0;
		max-width: 280px;
		line-height: 1.5;
	}
</style>
