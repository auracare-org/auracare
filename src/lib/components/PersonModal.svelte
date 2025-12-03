<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { getMember } from '$lib/data/team';
	import { departments, type Department } from '$lib/data/departments';

	interface Props {
		memberId: string;
	}

	let { memberId }: Props = $props();

	const dispatch = createEventDispatcher<{ close: void }>();

	const member = $derived(getMember(memberId));

	// Find all departments this person is involved in
	function findMemberDepartments(memberId: string): { role: string; department: string; path: string[] }[] {
		const results: { role: string; department: string; path: string[] }[] = [];

		function searchDepartment(dept: Department, path: string[]) {
			const currentPath = [...path, dept.name];
			const leads = Array.isArray(dept.lead) ? dept.lead : [dept.lead];

			if (leads.includes(memberId)) {
				results.push({ role: 'Lead', department: dept.name, path: currentPath });
			} else if (dept.subassignees.includes(memberId)) {
				results.push({ role: 'Team Member', department: dept.name, path: currentPath });
			}

			if (dept.subdepartments) {
				for (const sub of dept.subdepartments) {
					searchDepartment(sub, currentPath);
				}
			}
		}

		for (const dept of departments) {
			searchDepartment(dept, []);
		}

		return results;
	}

	const memberDepartments = $derived(findMemberDepartments(memberId));

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

<div class="person-modal-overlay">
	<!-- Backdrop -->
	<button
		class="person-modal-backdrop"
		onclick={close}
		aria-label="Close modal"
		transition:fade={{ duration: 200 }}
	></button>

	<!-- Modal -->
	<div
		class="person-modal-content"
		role="dialog"
		aria-modal="true"
		aria-labelledby="person-modal-title"
		transition:fly={{ y: 20, duration: 300, easing: cubicOut }}
	>
		<!-- Close button -->
		<button
			class="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 hover:text-primary-600 hover:border-primary-200 hover:bg-primary-50 transition-all duration-200 hover:scale-105 active:scale-95 z-10"
			onclick={close}
			aria-label="Close"
		>
			<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>

		{#if member}
			<div class="p-6">
				<!-- Avatar and basic info -->
				<div class="flex flex-col items-center text-center mb-6">
					<div class="mb-4">
						{#if member.img}
							<img
								src={member.img}
								alt={member.name}
								class="w-24 h-24 rounded-full object-cover ring-4 ring-primary-100 shadow-lg"
							/>
						{:else}
							<div
								class="w-24 h-24 rounded-full flex items-center justify-center font-bold text-2xl text-white ring-4 ring-primary-100 shadow-lg"
								style="background: linear-gradient(135deg, var(--color-primary-500), var(--color-primary-600));"
							>
								{member.name.split(' ').map(n => n[0]).join('')}
							</div>
						{/if}
					</div>

					<h2
						id="person-modal-title"
						class="text-xl font-bold text-neutral-900 mb-1"
					>
						{member.name}
					</h2>
					<p class="text-neutral-600 mb-4">
						{member.role}
					</p>

					<!-- Links -->
					{#if member.linkedin || member.website}
						<div class="flex items-center justify-center gap-3 flex-wrap">
							{#if member.linkedin}
								<a
									href={member.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0077b5] text-white text-sm font-medium hover:bg-[#006399] transition-all duration-200 hover:scale-105 active:scale-95"
								>
									<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
										<path
											d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
										/>
									</svg>
									LinkedIn
								</a>
							{/if}
							{#if member.website}
								<a
									href={member.website}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 text-neutral-700 text-sm font-medium hover:bg-neutral-200 transition-all duration-200 hover:scale-105 active:scale-95"
								>
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 3a9 9 0 110 18 9 9 0 010-18zm0 0c2.5 2.25 2.5 12.75 0 15m0-15C9.5 5.25 9.5 15.75 12 18m-7.8-6h15.6m-14-4h12.4m-12.4 8h12.4"
										/>
									</svg>
									Website
								</a>
							{/if}
						</div>
					{/if}
				</div>

				<!-- Departments -->
				{#if memberDepartments.length > 0}
					<div class="border-t border-neutral-100 pt-5">
						<h3 class="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-3">
							Departments ({memberDepartments.length})
						</h3>
						<div class="space-y-2 max-h-48 overflow-y-auto">
							{#each memberDepartments as { role, department, path }}
								<div
									class="flex items-center justify-between p-3 rounded-lg bg-neutral-50 hover:bg-neutral-100 transition-colors duration-150"
								>
									<div class="min-w-0 flex-1">
										<p class="font-medium text-neutral-900 truncate">{department}</p>
										{#if path.length > 1}
											<p class="text-xs text-neutral-500 truncate">
												{path.slice(0, -1).join(' → ')}
											</p>
										{/if}
									</div>
									<span
										class="flex-shrink-0 ml-3 px-2 py-1 rounded-full text-xs font-medium {role === 'Lead'
											? 'bg-primary-100 text-primary-700'
											: 'bg-neutral-200 text-neutral-600'}"
									>
										{role}
									</span>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		{:else}
			<div class="p-6 text-center">
				<p class="text-neutral-500">Team member not found</p>
			</div>
		{/if}
	</div>
</div>

<style>
	.person-modal-overlay {
		position: fixed;
		inset: 0;
		z-index: 60;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
	}

	.person-modal-backdrop {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(4px);
		border: none;
		cursor: pointer;
	}

	.person-modal-content {
		position: relative;
		width: 100%;
		max-width: 28rem;
		overflow: hidden;
		border-radius: 1rem;
		background: white;
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
		border: 1px solid #e5e5e5;
	}

	@media (min-width: 640px) {
		.person-modal-overlay {
			padding: 1.5rem;
		}
	}
</style>
