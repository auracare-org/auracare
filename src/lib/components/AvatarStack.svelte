<script lang="ts">
	import Avatar from './Avatar.svelte';

	interface Props {
		memberIds: string | string[];
		max?: number;
		size?: 'sm' | 'md' | 'lg';
		class?: string;
	}

	let { memberIds, max = 4, size = 'sm', class: className = '' }: Props = $props();

	const ids = $derived(Array.isArray(memberIds) ? memberIds : [memberIds]);
	const visibleIds = $derived(ids.slice(0, max));
	const overflow = $derived(ids.length - max);
</script>

<div class="flex items-center {className}">
	{#each visibleIds as memberId, index}
		<div class="relative" style="margin-left: {index === 0 ? '0' : '-8px'}; z-index: {visibleIds.length - index};">
			<Avatar {memberId} {size} />
		</div>
	{/each}
	{#if overflow > 0}
		<div
			class="relative flex items-center justify-center rounded-full bg-neutral-100 text-neutral-600 font-semibold ring-2 ring-white
				{size === 'sm' ? 'w-8 h-8 text-xs' : size === 'md' ? 'w-10 h-10 text-sm' : 'w-16 h-16 text-lg'}"
			style="margin-left: -8px; z-index: 0;"
		>
			+{overflow}
		</div>
	{/if}
</div>
