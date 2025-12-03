<script lang="ts">
	import { getMember, getInitials } from '$lib/data/team';
	import { openPersonModal } from '$lib/stores/personModal';

	interface Props {
		memberId: string;
		size?: 'sm' | 'md' | 'lg';
		class?: string;
		clickable?: boolean;
	}

	let { memberId, size = 'md', class: className = '', clickable = true }: Props = $props();

	const member = $derived(getMember(memberId));
	const initials = $derived(member ? getInitials(member.name) : memberId.slice(0, 2).toUpperCase());

	const sizeClasses = {
		sm: 'w-8 h-8 text-xs',
		md: 'w-10 h-10 text-sm',
		lg: 'w-16 h-16 text-lg'
	};

	function handleClick(e: MouseEvent) {
		if (clickable) {
			e.stopPropagation();
			openPersonModal(memberId);
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (clickable && e.key === 'Enter') {
			e.stopPropagation();
			openPersonModal(memberId);
		}
	}
</script>

{#if member?.img}
	<img
		src={member.img}
		alt={member.name}
		class="rounded-full object-cover ring-2 ring-white {sizeClasses[size]} {className} {clickable ? 'cursor-pointer hover:ring-primary-300 hover:scale-105 transition-all duration-200' : ''}"
		title={member.name}
		onclick={handleClick}
		onkeydown={handleKeydown}
		role={clickable ? 'button' : undefined}
		tabindex={clickable ? 0 : undefined}
	/>
{:else}
	<div
		class="rounded-full flex items-center justify-center font-semibold text-white ring-2 ring-white {sizeClasses[size]} {className} {clickable ? 'cursor-pointer hover:ring-primary-300 hover:scale-105 transition-all duration-200' : ''}"
		style="background: linear-gradient(135deg, var(--color-primary-500), var(--color-primary-600));"
		title={member?.name ?? memberId}
		onclick={handleClick}
		onkeydown={handleKeydown}
		role={clickable ? 'button' : undefined}
		tabindex={clickable ? 0 : undefined}
	>
		{initials}
	</div>
{/if}
