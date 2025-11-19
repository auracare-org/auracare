<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Department } from '$lib/data/departments';

	export let dept: Department;
	export let applyUrl: string;

	const dispatch = createEventDispatcher<{ open: Department }>();

	const getLeadNames = (lead: string | string[]) => (Array.isArray(lead) ? lead : [lead]);

	function openModal() {
		dispatch('open', dept);
	}
</script>

<article
	class="group relative flex h-full min-h-[210px] flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
>
	<div
		class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-500/70 via-primary-500 to-primary-600"
	></div>
	<div class="flex h-full flex-col items-center text-center px-6 py-5 gap-4">
		<div class="flex-1 flex flex-col items-center gap-3 justify-center">
			<div
				class="inline-flex items-center rounded-full bg-primary-50 px-5 py-2 text-primary-700 font-bold uppercase tracking-wide text-sm"
			>
				{dept.name}
			</div>
			<div class="text-sm text-neutral-600 font-medium">
				Lead: {getLeadNames(dept.lead).join(', ')} ({dept.subassignees.length} teammate{dept
					.subassignees.length === 1
					? ''
					: 's'})
			</div>
			{#if dept.description}
				<p class="text-neutral-700 text-sm leading-6 max-w-prose">{dept.description}</p>
			{/if}
		</div>
		<div class="flex flex-wrap items-center justify-center gap-3">
			<button type="button" class="btn btn-secondary text-sm px-4 py-2" onclick={openModal}>
				Open department
			</button>
			<a
				href={applyUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-healthcare text-sm px-4 py-2 shadow-md shadow-primary-500/15"
				onclick={(e) => e.stopPropagation()}
			>
				Apply to join
			</a>
		</div>
	</div>
</article>
