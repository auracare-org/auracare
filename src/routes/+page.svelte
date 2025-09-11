<script lang="ts">
	import { onMount } from 'svelte';

	let navOpen = $state(false);

	const toggleNav = () => {
		navOpen = !navOpen;
	};

	const teamMembers = [
		{ name: 'Hinlun Chen', role: 'Founder' },
		{ name: 'Linus Alpsten', role: 'Co-Founder' },
		{ name: 'Stephen Okita', role: 'Co-Founder' },
		{ name: 'Nicholas Chae', role: 'Team Member' },
		{ name: 'Ahnaf Kabir', role: 'Team Member' },
		{ name: 'Julius Chu', role: 'Team Member' },
		{ name: 'Ayza Zainal', role: 'Team Member' },
		{ name: 'Lu', role: 'Team Member' },
		{ name: 'Mini Han Wang', role: 'Team Member' }
	];
</script>

<!-- Navigation -->
<nav class="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-header border-b border-neutral-200">
	<div class="container">
		<div class="flex items-center justify-between h-16">
			<div class="flex items-center">
				<span class="text-2xl font-bold text-gradient">Auracare</span>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-8">
					<a href="#home" class="nav-link">Home</a>
					<a href="#about" class="nav-link">About</a>
					<a href="#team" class="nav-link">Team</a>
					<a href="#contact" class="nav-link">Contact</a>
				</div>
			</div>

			<!-- CTA Button -->
			<div class="hidden md:block">
				<a href="#contact" class="btn btn-primary">Start a Pilot</a>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					onclick={toggleNav}
					class="text-neutral-600 hover:text-neutral-900"
					aria-label="Toggle mobile menu"
				>
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</div>

		<!-- Mobile Navigation -->
		{#if navOpen}
			<div class="md:hidden">
				<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-neutral-200">
					<a href="#home" class="nav-link block px-3 py-2">Home</a>
					<a href="#about" class="nav-link block px-3 py-2">About</a>
					<a href="#team" class="nav-link block px-3 py-2">Team</a>
					<a href="#contact" class="nav-link block px-3 py-2">Contact</a>
					<a href="#contact" class="btn btn-primary mt-4 w-full">Start a Pilot</a>
				</div>
			</div>
		{/if}
	</div>
</nav>

<!-- Hero Section -->
<section id="home" class="section pt-32 gradient-bg">
	<div class="container">
		<div class="text-center max-w-4xl mx-auto">
			<h1 class="fade-in mb-6">
				<span class="text-gradient">AI triage + diagnostics</span><br />
				for primary care
			</h1>
			<p class="fade-in animation-delay-200 text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
				Assess, document, and route patients in minutes — aligned to NICE pathways and built for
				Pharmacy First.
			</p>
			<div class="fade-in animation-delay-400 flex flex-col sm:flex-row gap-4 justify-center mb-12">
				<a href="#contact" class="btn btn-primary btn-lg">Start a Pilot</a>
				<a href="#about" class="btn btn-secondary btn-lg">Learn More</a>
			</div>

			<!-- Key Benefits -->
			<div class="fade-in animation-delay-600 grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
				<div class="text-center">
					<div class="medical-icon mx-auto mb-4">
						<svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<h3 class="text-xl font-semibold mb-2">Shorter queues</h3>
					<p class="text-neutral-600">Reduce wait times with efficient AI-assisted triage</p>
				</div>
				<div class="text-center">
					<div class="medical-icon mx-auto mb-4">
						<svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
							/>
						</svg>
					</div>
					<h3 class="text-xl font-semibold mb-2">Safer care</h3>
					<p class="text-neutral-600">NICE-aligned pathways ensure clinical safety</p>
				</div>
				<div class="text-center">
					<div class="medical-icon mx-auto mb-4">
						<svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2.5 2.5 0 000-5H9m0 0v12m6-12v12M9 5H6.5a2.5 2.5 0 000 5H9"
							/>
						</svg>
					</div>
					<h3 class="text-xl font-semibold mb-2">Happier patients</h3>
					<p class="text-neutral-600">Better experience through timely, appropriate care</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- About Section -->
<section id="about" class="section section-alt">
	<div class="container">
		<div class="text-center mb-16">
			<h2 class="fade-in mb-6">About Auracare</h2>
			<p class="fade-in animation-delay-200 text-xl text-neutral-600 max-w-3xl mx-auto">
				We're building AI-enabled triage tools and smart diagnostics to help pharmacies and GP
				practices manage minor illnesses safely and fast, freeing up clinicians for complex care.
			</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
			<div class="slide-in-left">
				<h3 class="text-3xl font-semibold mb-6">What we do</h3>
				<p class="text-lg text-neutral-600 mb-6">
					Auracare combines an AI triage platform with an easy-to-use hardware kit so community
					clinicians can assess, document, and route patients in minutes — aligned to NICE-based
					pathways and tailored to Pharmacy First workflows.
				</p>
				<ul class="space-y-3 text-neutral-600">
					<li class="flex items-center">
						<svg class="w-5 h-5 text-success-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							></path>
						</svg>
						Handle more cases per day with clear documentation
					</li>
					<li class="flex items-center">
						<svg class="w-5 h-5 text-success-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							></path>
						</svg>
						Seamless Pharmacy First workflows
					</li>
					<li class="flex items-center">
						<svg class="w-5 h-5 text-success-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							></path>
						</svg>
						Built with UK clinicians for UK workflows
					</li>
				</ul>
			</div>
			<div class="slide-in-right">
				<div class="card p-8">
					<h4 class="text-2xl font-semibold mb-4 healthcare-accent">Why now?</h4>
					<p class="text-neutral-600 mb-6">
						Minor ailments account for a large share of GP appointments. With the NHS expanding
						Pharmacy First, pharmacies need simple triage, clear documentation, and safe hand-offs
						to handle increased demand at scale.
					</p>
					<div class="grid grid-cols-2 gap-4">
						<div class="text-center healthcare-bg p-4 rounded-lg">
							<div class="stat-number">30%</div>
							<div class="stat-label">of GP visits</div>
						</div>
						<div class="text-center healthcare-bg p-4 rounded-lg">
							<div class="stat-number">95%</div>
							<div class="stat-label">accuracy rate</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- How it works -->
		<div class="text-center mb-12">
			<h3 class="fade-in text-3xl font-semibold mb-8">How it works</h3>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div class="feature-card fade-in">
				<div class="medical-icon mx-auto mb-6">
					<svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>
				</div>
				<h4 class="text-xl font-semibold mb-4">AI triage software</h4>
				<p class="text-neutral-600">
					A clinician dashboard guides assessment and suggests care levels, with transparent
					reasoning and structured notes for referrals or escalation.
				</p>
			</div>

			<div class="feature-card fade-in animation-delay-200">
				<div class="medical-icon mx-auto mb-6">
					<svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
						/>
					</svg>
				</div>
				<h4 class="text-xl font-semibold mb-4">Integrated hardware</h4>
				<p class="text-neutral-600">
					A compact diagnostics kit captures vitals and clinical images directly into the patient
					record, streamlining documentation and follow-up.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Team Section -->
<section id="team" class="section">
	<div class="container">
		<div class="text-center mb-16">
			<h2 class="fade-in mb-6">Our Team</h2>
			<p class="fade-in animation-delay-200 text-xl text-neutral-600 max-w-3xl mx-auto">
				Meet the team building the future of healthcare triage
			</p>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each teamMembers as member, index}
				<div class="team-card fade-in" style="animation-delay: {index * 100}ms">
					<div
						class="w-20 h-20 bg-gradient-to-br from-primary-400 to-healthcare-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-semibold"
					>
						{member.name
							.split(' ')
							.map((n) => n[0])
							.join('')}
					</div>
					<h3 class="text-lg font-semibold mb-2">{member.name}</h3>
					<p class="text-neutral-600">{member.role}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Contact Section -->
<section id="contact" class="section section-alt">
	<div class="container">
		<div class="text-center max-w-3xl mx-auto">
			<h2 class="fade-in mb-6">Get in touch</h2>
			<p class="fade-in animation-delay-200 text-xl text-neutral-600 mb-8">
				Interested in piloting Auracare or partnering on research? Reach out to discuss trials,
				integrations, and clinical validation.
			</p>
			<div class="fade-in animation-delay-400 flex flex-col sm:flex-row gap-4 justify-center">
				<a href="mailto:hello@auracare.com" class="btn btn-primary btn-lg">Start a Pilot</a>
				<a href="mailto:hello@auracare.com" class="btn btn-secondary btn-lg">Download 1-pager</a>
			</div>
		</div>
	</div>
</section>

<!-- Footer -->
<footer class="bg-neutral-900 text-white py-12">
	<div class="container">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
			<div class="col-span-1 md:col-span-2">
				<span class="text-2xl font-bold text-gradient mb-4 block">Auracare</span>
				<p class="text-neutral-400 mb-4 max-w-md">
					AI-enabled triage tools and smart diagnostics for safer, faster primary care.
				</p>
				<p class="text-neutral-400 text-sm">
					We are UK-led and building toward broader EU deployment. A Hong Kong holding entity
					supports current operations and future scaling.
				</p>
			</div>

			<div>
				<h4 class="font-semibold mb-4">Product</h4>
				<ul class="space-y-2 text-neutral-400">
					<li><a href="#about" class="hover:text-white transition-colors">AI Triage</a></li>
					<li><a href="#about" class="hover:text-white transition-colors">Hardware Kit</a></li>
					<li><a href="#contact" class="hover:text-white transition-colors">Integration</a></li>
				</ul>
			</div>

			<div>
				<h4 class="font-semibold mb-4">Company</h4>
				<ul class="space-y-2 text-neutral-400">
					<li><a href="#about" class="hover:text-white transition-colors">About</a></li>
					<li><a href="#team" class="hover:text-white transition-colors">Team</a></li>
					<li><a href="#contact" class="hover:text-white transition-colors">Contact</a></li>
				</ul>
			</div>
		</div>

		<div class="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
			<p>&copy; 2025 Auracare. All rights reserved.</p>
		</div>
	</div>
</footer>
