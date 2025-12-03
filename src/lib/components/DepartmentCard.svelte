<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Department } from '$lib/data/departments';
	import { getMemberName } from '$lib/data/team';
	import Avatar from './Avatar.svelte';
	import AvatarStack from './AvatarStack.svelte';

	interface Props {
		dept: Department;
		applyUrl: string;
	}

	let { dept, applyUrl }: Props = $props();

	const dispatch = createEventDispatcher<{ open: Department }>();

	const leadIds = $derived(Array.isArray(dept.lead) ? dept.lead : [dept.lead]);
	const leadNames = $derived(leadIds.map((id) => getMemberName(id)).join(' & '));

	// Collect all unique team members from subdepartments recursively
	function collectAllMembers(d: Department): string[] {
		const members = new Set<string>();

		// Add direct subassignees
		d.subassignees.forEach((id) => members.add(id));

		// Add leads and subassignees from subdepartments
		if (d.subdepartments) {
			for (const sub of d.subdepartments) {
				const subLeads = Array.isArray(sub.lead) ? sub.lead : [sub.lead];
				subLeads.forEach((id) => members.add(id));
				collectAllMembers(sub).forEach((id) => members.add(id));
			}
		}

		return Array.from(members);
	}

	const allTeamMembers = $derived(collectAllMembers(dept).filter((id) => !leadIds.includes(id)));
	const teamCount = $derived(allTeamMembers.length);

	function openModal() {
		dispatch('open', dept);
	}
</script>

<article
	class="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary-500/10 hover:border-primary-200/60 cursor-pointer active:scale-[0.98]"
	onclick={openModal}
	onkeydown={(e) => e.key === 'Enter' && openModal()}
	role="button"
	tabindex="0"
>
	<!-- Gradient accent bar with hover animation -->
	<div
		class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-500/70 via-primary-500 to-primary-600 transition-all duration-300 group-hover:h-1.5"
	></div>

	<div class="flex h-full flex-col px-6 py-6 gap-5">
		<!-- Lead section with prominent avatars -->
		<div class="flex flex-col items-center gap-3">
			<!-- Lead avatar(s) with hover ring effect -->
			<div class="flex items-center justify-center gap-2">
				{#each leadIds as leadId}
					<div class="transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-0.5">
						<Avatar memberId={leadId} size="lg" class="transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-primary-500/20" />
					</div>
				{/each}
			</div>

			<!-- Department badge with subtle hover -->
			<div
				class="inline-flex items-center rounded-full bg-primary-50 px-4 py-1.5 text-primary-700 font-semibold text-sm transition-colors duration-200 group-hover:bg-primary-100"
			>
				{dept.name}
			</div>

			<!-- Lead name -->
			<p class="text-sm text-neutral-500 transition-colors duration-200 group-hover:text-neutral-600">
				Led by <span class="font-medium text-neutral-700">{leadNames}</span>
			</p>
		</div>

		<!-- Description -->
		{#if dept.description}
			<p class="text-neutral-600 text-sm leading-relaxed text-center flex-1">{dept.description}</p>
		{/if}

		<!-- Team row with hover animation -->
		{#if teamCount > 0}
			<div class="flex items-center justify-center gap-2 transition-transform duration-300 group-hover:scale-105">
				<AvatarStack memberIds={allTeamMembers} max={4} size="sm" />
				<span class="text-xs text-neutral-500">
					{teamCount} team member{teamCount === 1 ? '' : 's'}
				</span>
			</div>
		{/if}

		<!-- Actions with hover effects -->
		<div class="flex flex-wrap items-center justify-center gap-3 mt-auto pt-2">
			<button
				type="button"
				class="btn btn-secondary text-sm px-4 py-2 transition-all duration-200 hover:scale-105 active:scale-95"
				onclick={openModal}
			>
				View details
			</button>
			<a
				href={applyUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-healthcare text-sm px-4 py-2 shadow-md shadow-primary-500/15 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 active:scale-95"
				onclick={(e) => e.stopPropagation()}
			>
				Apply
			</a>
		</div>
	</div>
</article>
