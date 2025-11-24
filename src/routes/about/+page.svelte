<script lang="ts">
	import { teamMembers, getInitials } from '$lib/teamData';
</script>

<svelte:head>
	<title>About Us - Auracare</title>
	<meta
		name="description"
		content="Learn about Auracare's mission to transform primary care with AI-powered triage tools. Meet our team of healthcare and technology experts."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="page-hero" style="padding-top: 9rem; padding-bottom: 4rem;">
	<span
		class="bubble"
		style="--bubble-size: 400px; --bubble-color: rgba(97, 128, 255, 0.25); top: -120px; right: -80px;"
	></span>
	<span
		class="bubble"
		style="--bubble-size: 260px; --bubble-color: var(--color-white-alpha-70); bottom: -120px; left: 10%;"
	></span>
	<div class="container">
		<div class="text-center max-w-4xl mx-auto">
			<h1 class="fade-in mb-6" style="color: var(--color-text-header-secondary);">About Auracare</h1>
			<p class="fade-in animation-delay-200 text-xl max-w-3xl mx-auto" style="color: var(--color-text-body-secondary);">
				We're building the future of primary care through AI-powered triage and diagnostics, making
				quality healthcare accessible in community spaces.
			</p>
		</div>
	</div>
</section>

<!-- Team Section -->
<section id="team" class="section">
	<div class="container">
		<div class="section-surface">
			<div class="text-center mb-12">
				<h2 class="fade-in mb-6" style="color: var(--color-text-header-secondary);">Our team</h2>
				<p class="fade-in animation-delay-200 text-lg text-neutral-600 max-w-3xl mx-auto">
					Meet the team building the future of healthcare triage
				</p>
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{#each teamMembers as member, index}
					<div class="team-card fade-in" style="animation-delay: {index * 50}ms">
						{#if member.img}
							<img
								src={member.img}
								alt={member.name}
								class="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
							/>
						{:else}
							<div
								class="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-lg font-semibold"
								style="background: linear-gradient(135deg, var(--color-primary-500), var(--color-primary-600));"
							>
								{getInitials(member.name)}
							</div>
						{/if}
						<h3 class="text-base font-semibold mb-1" style="color: var(--color-text-header-secondary);">{member.name}</h3>
						<p class="text-neutral-600 text-sm mb-2">{member.role}</p>
						<div class="flex items-center justify-center gap-3">
							{#if member.linkedin}
								<a
									href={member.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center gap-1 text-xs text-primary-600 hover:text-primary-700 transition-colors"
									aria-label="LinkedIn profile for {member.name}"
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
									class="inline-flex items-center gap-1 text-xs text-primary-600 hover:text-primary-700 transition-colors"
									aria-label="Website for {member.name}"
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
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Our Journey Section -->
<section id="journey" class="section">
	<div class="container">
		<div class="section-surface">
			<div class="max-w-4xl mx-auto">
				<h2 class="fade-in mb-8 text-center" style="color: var(--color-text-header-secondary);">Our journey</h2>
				<p
					class="fade-in animation-delay-200 text-center text-lg mb-12"
					style="color: var(--color-text-body-secondary); line-height: 1.75;"
				>
					From idea to impact: Building the future of community healthcare
				</p>

				<div class="space-y-8">
					<div class="fade-in animation-delay-200 flex gap-6">
						<div class="flex-shrink-0">
							<div class="w-3 h-3 rounded-full mt-2" style="background: var(--color-bg-button-primary-default);"></div>
						</div>
						<div>
							<h3 class="text-lg font-bold mb-2" style="color: var(--color-text-header-secondary);">2025 Early Summer</h3>
							<p style="color: var(--color-text-body-secondary); line-height: 1.75;">
								Stephen and Hinlun were connected through a mutual friend and decided to apply their
								skills for the benefit of public health systems.
							</p>
						</div>
					</div>

					<div class="fade-in animation-delay-400 flex gap-6">
						<div class="flex-shrink-0">
							<div class="w-3 h-3 rounded-full mt-2" style="background: var(--color-bg-button-primary-default);"></div>
						</div>
						<div>
							<h3 class="text-lg font-bold mb-2" style="color: var(--color-text-header-secondary);">2025 Late Summer</h3>
							<p style="color: var(--color-text-body-secondary); line-height: 1.75;">
								Found issues and opportunities in the software and hardware of the Pharmacy First
								pathways. Brought on core members Nicholas (AI/ML) and Linus (Business and
								Partnerships).
							</p>
						</div>
					</div>

					<div class="fade-in animation-delay-600 flex gap-6">
						<div class="flex-shrink-0">
							<div class="w-3 h-3 rounded-full mt-2" style="background: var(--color-bg-button-primary-default);"></div>
						</div>
						<div>
							<h3 class="text-lg font-bold mb-2" style="color: var(--color-text-header-secondary);">2025 Fall</h3>
							<p style="color: var(--color-text-body-secondary); line-height: 1.75;">
								Demo software and hardware completed and began piloting in pharmacies in the UK.
							</p>
						</div>
					</div>

					<div class="fade-in animation-delay-800 flex gap-6">
						<div class="flex-shrink-0">
							<div class="w-3 h-3 rounded-full mt-2" style="background: var(--color-bg-button-primary-default);"></div>
						</div>
						<div>
							<h3 class="text-lg font-bold mb-2" style="color: var(--color-text-header-secondary);">2025 Winter</h3>
							<p style="color: var(--color-text-body-secondary); line-height: 1.75;">
								Expanding hiring, began planning for B2C telehealth integration and certification.
								Implemented NHS integration and applied for grants and incubators.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="section" style="background: var(--color-bg-surface-default);">
	<div class="container">
		<div class="text-center max-w-3xl mx-auto">
			<h2 class="fade-in mb-6" style="color: var(--color-text-header-secondary);">Join us on our mission</h2>
			<p class="fade-in animation-delay-200 text-lg mb-8" style="color: var(--color-text-body-secondary);">
				Interested in partnering with Auracare or joining our team? We'd love to hear from you.
			</p>
			<div class="fade-in animation-delay-400 flex flex-col sm:flex-row gap-4 justify-center">
				<a
					href="/join-us"
					class="btn btn-lg"
					style="background: var(--color-bg-button-primary-default); color: white; padding: 0.875rem 2rem; border-radius: 8px; font-weight: 600; box-shadow: 0 4px 12px rgba(47, 78, 192, 0.3);"
					>See Positions</a
				>
			</div>
		</div>
	</div>
</section>
