<script lang="ts">
	import { departments } from '$lib/data/departments';
	import DepartmentCard from '$lib/components/DepartmentCard.svelte';
	import DepartmentModal from '$lib/components/DepartmentModal.svelte';
	import type { Department } from '$lib/data/departments';

	const applyUrl =
		'https://contentcreationcollective.notion.site/2aceb3c2267a80a49e7af52153278654?pvs=105';

	let activeDept: Department | null = null;
</script>

<svelte:head>
	<title>Join Us - Auracare</title>
	<meta
		name="description"
		content="Explore opportunities to join the Auracare team. Learn about our organizational structure and find where you can make an impact in healthcare technology."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-b from-white to-neutral-50 pt-28 pb-10">
	<div class="container">
		<div class="text-center max-w-4xl mx-auto space-y-4">
			<div
				class="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-600"
			>
				<span class="w-2 h-2 rounded-full bg-primary-500"></span>
				We're growing the team
			</div>
			<h1 class="fade-in" style="color: #1f2937;">Join our mission</h1>
			<p class="fade-in animation-delay-200 text-xl max-w-3xl mx-auto text-neutral-600 leading-8">
				Here is our organizational structure. Explore where you can make an impact—we celebrate
				people who take initiative.
			</p>
		</div>
	</div>
</section>

<!-- Departments Section -->
<section class="section" style="background: #fafafa;">
	<div class="container">
		<div class="max-w-5xl mx-auto">
			<div class="grid auto-rows-fr gap-4 md:grid-cols-2">
				{#each departments as dept, index}
					<div class="fade-in h-full" style="animation-delay: {index * 100}ms">
						<DepartmentCard {dept} {applyUrl} on:open={(e) => (activeDept = e.detail)} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="section" style="background: white;">
	<div class="container">
		<div class="text-center max-w-3xl mx-auto">
			<h2 class="fade-in mb-6" style="color: #1f2937;">Ready to make an impact?</h2>
			<p class="fade-in animation-delay-200 text-lg mb-8" style="color: #6b7280;">
				Whether you're interested in full-time roles, part-time contributions, or advisory
				positions, we'd love to hear from you.
			</p>
			<div class="fade-in animation-delay-400">
				<a
					href={applyUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-healthcare btn-lg px-8 shadow-lg shadow-primary-500/20"
					>Submit your application</a
				>
			</div>
		</div>
	</div>
</section>

{#if activeDept}
	<DepartmentModal dept={activeDept} {applyUrl} on:close={() => (activeDept = null)} />
{/if}
