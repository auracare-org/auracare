<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import type { Department } from '$lib/data/departments';
	export let dept: Department;
	export let applyUrl: string;

	const dispatch = createEventDispatcher<{ close: void }>();
	let expanded = new Set<string>(); // starts fully collapsed

	const getLeadNames = (lead: string | string[]) => (Array.isArray(lead) ? lead : [lead]);

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
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') close();
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	});
</script>

<div class="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
	<div class="absolute inset-0 bg-black/50 backdrop-blur-sm" onclick={close}></div>
	<div
		class="relative w-full max-w-3xl max-h-[80vh] overflow-hidden rounded-2xl bg-white shadow-2xl border border-neutral-200"
	>
		<div class="flex items-start justify-between gap-4 px-6 py-4 border-b border-neutral-100">
			<div class="space-y-2">
				<div class="flex items-center gap-3 flex-wrap">
					<div class="rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">
						{dept.name}
					</div>
					<div
						class="flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-neutral-500 font-semibold"
					>
						<span>Lead</span>
						<span class="text-neutral-700 normal-case font-semibold"
							>{getLeadNames(dept.lead).join(', ')}</span
						>
					</div>
					{#if dept.subassignees.length > 0}
						<div
							class="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700"
						>
							<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
							{dept.subassignees.length} teammate{dept.subassignees.length === 1 ? '' : 's'}
						</div>
					{/if}
				</div>
				{#if dept.description}
					<p class="text-neutral-700 text-sm leading-6 max-w-2xl">{dept.description}</p>
				{/if}
			</div>
			<div class="flex items-center gap-3">
				<a
					href={applyUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-healthcare text-sm px-4 py-2 shadow-md shadow-primary-500/15"
				>
					Apply to help
				</a>
				<button
					class="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 hover:text-primary-600 hover:border-primary-200 transition"
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

		<div class="max-h-[60vh] overflow-y-auto p-6">
			{#if dept.subdepartments && dept.subdepartments.length > 0}
				{@render SubDepartmentList({
					parentKey: dept.name,
					items: dept.subdepartments,
					applyUrl,
					expanded,
					onToggle: toggle
				})}
			{:else}
				<p class="text-neutral-500 text-sm">No subdepartments listed.</p>
			{/if}
		</div>
	</div>
</div>

{#snippet leadList(lead: string | string[])}
	<div
		class="flex items-center gap-1.5 flex-wrap text-xs uppercase tracking-[0.08em] text-neutral-500 font-semibold"
	>
		<span class="text-neutral-700 normal-case font-semibold">{getLeadNames(lead).join(', ')}</span>
	</div>
{/snippet}

{#snippet teamList(members: string[])}
	{#if members.length > 0}
		<div class="flex items-center gap-1.5 flex-wrap text-sm text-neutral-700">
			<span class="text-neutral-500 text-xs uppercase tracking-[0.08em] font-semibold">Team</span>
			<span>{members.join(', ')}</span>
		</div>
	{/if}
{/snippet}

{#snippet SubDepartmentList({
	parentKey,
	items,
	applyUrl,
	expanded,
	onToggle
}: {
	parentKey: string;
	items: Department[];
	applyUrl: string;
	expanded: Set<string>;
	onToggle: (key: string) => void;
})}
	<div class="space-y-3">
		{#each items as item}
			<div
				class="bg-white rounded-xl border border-neutral-200 shadow-[0_1px_0_var(--color-neutral-200)] overflow-hidden"
			>
				<button
					class="w-full px-4 py-3 text-left flex items-start justify-between gap-4"
					onclick={() => onToggle(`${parentKey}-${item.name}`)}
				>
					<div class="flex-1 space-y-1.5">
						<div class="flex items-center gap-2 flex-wrap">
							<h4 class="text-base font-semibold text-neutral-900">{item.name}</h4>
							{@render leadList(item.lead)}
						</div>
						{#if item.description}
							<p class="text-neutral-600 text-sm">{item.description}</p>
						{/if}
						{@render teamList(item.subassignees)}
					</div>
					<div class="flex-shrink-0 flex flex-col items-end gap-2">
						{#if item.subdepartments && item.subdepartments.length > 0}
							<svg
								class="w-4 h-4 text-neutral-400 transition-transform {expanded.has(
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
							class="btn btn-secondary text-xs py-1.5 px-3"
							onclick={(e) => e.stopPropagation()}
						>
							Apply
						</a>
					</div>
				</button>

				{#if expanded.has(`${parentKey}-${item.name}`) && item.subdepartments}
					<div class="border-t border-neutral-200 bg-neutral-50 p-4">
						{@render SubDepartmentList({
							parentKey: `${parentKey}-${item.name}`,
							items: item.subdepartments,
							applyUrl,
							expanded,
							onToggle
						})}
					</div>
				{/if}
			</div>
		{/each}
	</div>
{/snippet}
