<script lang="ts">
	import { IconFlask, IconCalendar, IconFileText, IconAward } from '@tabler/icons-svelte';

	interface Props {
		quarter: string;
		title: string;
		description: string;
		icon: string;
		isTopRow: boolean;
		index: number;
	}

	let { quarter, title, description, icon, isTopRow, index }: Props = $props();

	const iconMap = {
		IconFlask,
		IconCalendar,
		IconFileText,
		IconAward
	};

	const IconComponent = iconMap[icon as keyof typeof iconMap];

	// Determine height based on position (first card in top row is taller)
	const cardHeight = isTopRow && index === 0 ? '248px' : '224px';
</script>

<div class="roadmap-card" style="height: {cardHeight};">
	<div class="icon-wrapper">
		<div class="icon-inner">
			<IconComponent size={32} stroke={2} />
		</div>
	</div>
	<div class="card-content">
		<p class="card-quarter">{quarter}</p>
		<p class="card-title">{title}</p>
		<p class="card-description">{description}</p>
	</div>
</div>

<style>
	.roadmap-card {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		gap: 16px;
		flex: 1 1 0%;
		align-items: flex-start;
		min-width: 292px;
		padding: 32px;
		background: linear-gradient(134.89deg, #4b6ef3 3.42%, #6380f7 92.96%);
		border-radius: 16px;
	}

	.icon-wrapper {
		backdrop-filter: blur(6px);
		-webkit-backdrop-filter: blur(6px);
		background: rgba(255, 255, 255, 0.1);
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		gap: 8px;
		align-items: center;
		padding: 12px;
		border-radius: 12px;
		width: 56px;
		height: 56px;
		flex-shrink: 0;
	}

	.icon-inner {
		width: 32px;
		height: 32px;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.card-content {
		display: flex;
		flex-direction: column;
		gap: 4px;
		align-items: flex-start;
		width: 100%;
	}

	.card-quarter {
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
		font-size: 18px;
		line-height: 28px;
		color: #ffffff;
		margin: 0;
		height: 28px;
		width: 100%;
		text-align: left;
	}

	.card-title {
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		font-size: 18px;
		line-height: 28px;
		color: #ffffff;
		margin: 0;
		width: 100%;
		text-align: left;
	}

	.card-description {
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		color: #ffffff;
		opacity: 0.8;
		margin: 0;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: left;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.roadmap-card {
			min-width: auto;
			height: auto !important;
		}
	}
</style>
