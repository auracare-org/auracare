<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { slide, fade, fly } from 'svelte/transition';
	import { cubicOut, cubicInOut } from 'svelte/easing';
	import type { Department } from '$lib/data/departments';
	import { getMemberName } from '$lib/data/team';
	import Avatar from './Avatar.svelte';
	import AvatarStack from './AvatarStack.svelte';

	interface Props {
		dept: Department;
		applyUrl: string;
	}

	let { dept, applyUrl }: Props = $props();

	const dispatch = createEventDispatcher<{ close: void }>();
	let expanded = $state(new Set<string>()); // starts fully collapsed
	let mounted = $state(false);

	const getLeadIds = (lead: string | string[]) => (Array.isArray(lead) ? lead : [lead]);
	const getLeadNames = (lead: string | string[]) =>
		getLeadIds(lead)
			.map((id) => getMemberName(id))
			.join(' & ');

	function toggle(key: string) {
		const next = new Set(expanded);
		if (next.has(key)) {
			next.delete(key);
		} else {
			next.add(key);
		}
		expanded = next;
	}

	function close() {
		dispatch('close');
	}

	onMount(() => {
		mounted = true;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') close();
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	});
</script>

<div class="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
	<!-- Backdrop with fade -->
	<div
		class="absolute inset-0 bg-black/50 backdrop-blur-sm"
		onclick={close}
		transition:fade={{ duration: 200 }}
	></div>

	<!-- Modal with fly + scale animation -->
	<div
		class="relative w-full max-w-3xl max-h-[80vh] overflow-hidden rounded-2xl bg-white shadow-2xl border border-neutral-200"
		transition:fly={{ y: 20, duration: 300, easing: cubicOut }}
	>
		<div class="px-6 py-5 border-b border-neutral-100">
			<!-- Top row: Avatar, badge, buttons -->
			<div class="flex items-start justify-between gap-4 mb-4">
				<div class="flex items-center gap-4">
					<!-- Lead avatars -->
					<div class="flex items-center gap-1 flex-shrink-0">
						{#each getLeadIds(dept.lead) as leadId, i}
							<div
								in:fly={{ x: -10, duration: 300, delay: 100 + i * 50, easing: cubicOut }}
							>
								<Avatar memberId={leadId} size="lg" />
							</div>
						{/each}
					</div>

					<div>
						<div
							class="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold text-primary-700 inline-block"
							in:fly={{ y: -5, duration: 250, delay: 150, easing: cubicOut }}
						>
							{dept.name}
						</div>
						<p
							class="text-sm text-neutral-600 mt-1"
							in:fade={{ duration: 200, delay: 200 }}
						>
							Led by <span class="font-medium text-neutral-800">{getLeadNames(dept.lead)}</span>
						</p>
					</div>
				</div>

				<div class="flex items-center gap-3 flex-shrink-0">
					<a
						href={applyUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-healthcare text-sm px-4 py-2 shadow-md shadow-primary-500/15 transition-transform hover:scale-105 active:scale-95"
					>
						Apply
					</a>
					<button
						class="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 hover:text-primary-600 hover:border-primary-200 hover:bg-primary-50 transition-all duration-200 hover:scale-105 active:scale-95"
						onclick={close}
						aria-label="Close"
					>
						<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
			</div>

			<!-- Description stretches full width -->
			{#if dept.description}
				<p
					class="text-neutral-600 text-sm leading-relaxed"
					in:fade={{ duration: 250, delay: 250 }}
				>
					{dept.description}
				</p>
			{/if}

			<!-- Team members -->
			{#if dept.subassignees.length > 0}
				<div
					class="flex items-center gap-2 mt-3"
					in:fly={{ y: 10, duration: 300, delay: 300, easing: cubicOut }}
				>
					<AvatarStack memberIds={dept.subassignees} max={5} size="sm" />
					<span class="text-xs text-neutral-500">
						{dept.subassignees.length} team member{dept.subassignees.length === 1 ? '' : 's'}
					</span>
				</div>
			{/if}
		</div>

		<div class="max-h-[60vh] overflow-y-auto p-6">
			{#if dept.subdepartments && dept.subdepartments.length > 0}
				{@render SubDepartmentList({
					parentKey: dept.name,
					items: dept.subdepartments,
					applyUrl,
					expanded,
					onToggle: toggle,
					depth: 0
				})}
			{:else}
				<p class="text-neutral-500 text-sm">No subdepartments listed.</p>
			{/if}
		</div>
	</div>
</div>

{#snippet leadDisplay(lead: string | string[])}
	{@const leadIds = getLeadIds(lead)}
	<div class="flex items-center gap-2">
		<AvatarStack memberIds={leadIds} max={3} size="sm" />
		<span class="text-sm text-neutral-600">{getLeadNames(lead)}</span>
	</div>
{/snippet}

{#snippet teamDisplay(members: string[])}
	{#if members.length > 0}
		<div class="flex items-center gap-2 pt-1">
			<AvatarStack memberIds={members} max={4} size="sm" />
			<span class="text-xs text-neutral-500">
				{members.length} member{members.length === 1 ? '' : 's'}
			</span>
		</div>
	{/if}
{/snippet}

{#snippet SubDepartmentList({
	parentKey,
	items,
	applyUrl,
	expanded,
	onToggle,
	depth
}: {
	parentKey: string;
	items: Department[];
	applyUrl: string;
	expanded: Set<string>;
	onToggle: (key: string) => void;
	depth: number;
})}
	<div class="space-y-3">
		{#each items as item, index}
			<div
				class="bg-white rounded-xl border border-neutral-200 shadow-[0_1px_0_var(--color-neutral-200)] overflow-hidden transition-all duration-200 hover:shadow-md"
				in:fly={{ y: 15, duration: 250, delay: depth === 0 ? 100 + index * 50 : 0, easing: cubicOut }}
			>
				<button
					class="w-full px-4 py-3 text-left flex items-start justify-between gap-4 hover:bg-neutral-50/80 transition-colors duration-150"
					onclick={() => onToggle(`${parentKey}-${item.name}`)}
				>
					<div class="flex-1 space-y-2">
						<div class="flex items-center gap-3 flex-wrap">
							<h4 class="text-base font-semibold text-neutral-900">{item.name}</h4>
						</div>
						{@render leadDisplay(item.lead)}
						{#if item.description}
							<p class="text-neutral-600 text-sm">{item.description}</p>
						{/if}
						{@render teamDisplay(item.subassignees)}
					</div>
					<div class="flex-shrink-0 flex flex-col items-end gap-2">
						{#if item.subdepartments && item.subdepartments.length > 0}
							<svg
								class="w-4 h-4 text-neutral-400 transition-transform duration-300 ease-out {expanded.has(
									`${parentKey}-${item.name}`
								)
									? 'rotate-180'
									: ''}"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						{/if}
						<a
							href={applyUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="btn btn-secondary text-xs py-1.5 px-3 transition-transform hover:scale-105 active:scale-95"
							onclick={(e) => e.stopPropagation()}
						>
							Apply
						</a>
					</div>
				</button>

				{#if expanded.has(`${parentKey}-${item.name}`) && item.subdepartments}
					<div
						class="border-t border-neutral-200 bg-neutral-50 overflow-hidden"
						transition:slide={{ duration: 300, easing: cubicInOut }}
					>
						<div class="p-4">
							{@render SubDepartmentList({
								parentKey: `${parentKey}-${item.name}`,
								items: item.subdepartments,
								applyUrl,
								expanded,
								onToggle,
								depth: depth + 1
							})}
						</div>
					</div>
				{/if}
			</div>
		{/each}
	</div>
{/snippet}
