<script lang="ts">
    import { onMount } from 'svelte';
    import { slide, fade } from 'svelte/transition';

	const teamMembers = [
		{ name: 'Hinlun Chen', role: 'Founder, CEO & CFO', status: 'Full-time' },
		{ name: 'Stephen Okita', role: 'Chief Technology Officer (CTO)', status: 'Full-time' },
		{ name: 'Nicholas Chae', role: 'Head of Machine Learning (ML)', status: 'Full-time' },
		{ name: 'Linus Alpsten', role: 'Head of Partnerships and Research', status: 'Full-time' },
		{
			name: 'Ahnaf Kabir',
			role: 'VP, Engineering',
			status: 'Part-time'
		},
		{ name: 'Ayza Zainal', role: 'Freelance UI/UX Designer', status: 'Freelance' },
		{ name: 'Lu', role: 'Hardware Engineering Lead', status: 'Full-time (Goodl)' },
		{ name: 'Mini Han Wang', role: 'Medical Data Science Advisor', status: 'Advisor' },
		{ name: 'Julius Chu', role: 'Marketing Advisor', status: 'Advisor' }
	];

	let expandedUseCase = $state(null);

	const useCases = [
		{
			id: 'pharmacy',
			title: 'Pharmacy first workflows',
			subtitle:
				'Pharmacists are increasingly the first point of contact for everyday health concerns.',
			content:
				'When a patient comes in with ear pain or a sore throat, Auracare can quickly collect symptom data, capture images, and generate a triage report. This allows pharmacists to: Decide whether to provide OTC treatments or escalate to a GP, Save time compared to manual questioning, Build trust by offering safer, more professionalized advice.'
		},
		{
			id: 'clinician',
			title: 'Clinician waiting rooms',
			subtitle:
				'GPs and specialists are overwhelmed by cases that could have been handled earlier in the chain.',
			content:
				'With Auracare, reception staff or nurses can run triage before the consultation, so by the time the patient meets the doctor: The history is already structured and documented, Likely diagnoses and red flags are flagged, Doctors can focus their limited time on decision-making, not data collection.'
		},
		{
			id: 'schools',
			title: 'Schools and care homes',
			subtitle: 'Non-specialist caregivers often struggle to know when to escalate health issues.',
			content:
				'Auracare allows school nurses and care home staff to: Perform basic but structured health assessments, Capture reliable data (otoscopic images, vitals, symptom checklists), Escalate only when necessary, reducing unnecessary referrals but catching serious issues faster.'
		},
		{
			id: 'workplace',
			title: 'Workplace and mobile clinics',
			subtitle: 'Employees and underserved communities often face barriers to timely care.',
			content:
				'Auracare enables occupational health providers and mobile units to: Provide on-site triage for common issues (ear infections, skin conditions, sore throats), Offer immediate reports and treatment options, or escalate if needed, Improve access and reduce absenteeism while lowering pressure on hospitals.'
		}
	];

	const toggleUseCase = (id) => {
		expandedUseCase = expandedUseCase === id ? null : id;
	};
</script>

<!-- Hero Section -->
<section id="home" class="hero-section relative overflow-hidden">
	<!-- Background Elements -->
	<div class="hero-bg-pattern absolute inset-0"></div>
	<div class="hero-gradient-overlay absolute inset-0"></div>

	<!-- Floating Elements -->
	<div class="floating-elements absolute inset-0 pointer-events-none">
		<div class="floating-circle floating-circle-1"></div>
		<div class="floating-circle floating-circle-2"></div>
		<div class="floating-circle floating-circle-3"></div>
	</div>

	<div class="container relative z-10 pt-16 pb-24">
		<div class="text-center max-w-4xl mx-auto">
			<h1 class="hero-title mb-6">
				<span class="slide-in-up hero-title-primary block">AI-powered triage</span>
				<span class="slide-in-up animation-delay-200 hero-title-secondary block"
					>for primary care providers</span
				>
			</h1>
			<h2 class="slide-in-up animation-delay-400 text-2xl font-semibold mb-6 hero-subtitle">
				Smarter triage. Faster care. Better outcomes.
			</h2>
			<p class="slide-in-up animation-delay-600 text-xl hero-description mb-8 max-w-3xl mx-auto">
				Auracare helps connect your patients with the right care - quickly, safely, and closer to
				home - using AI-powered triage and diagnostics.
			</p>
			<div
				class="slide-in-up animation-delay-800 flex flex-col sm:flex-row gap-4 justify-center mb-16"
			>
				<a href="#contact" class="btn btn-primary btn-lg hero-btn">Demo (Contact Us)</a>
				<a href="#what-is" class="btn btn-secondary btn-lg hero-btn-secondary">Learn More</a>
			</div>

			<!-- Key Benefits -->
			<div class="slide-in-up animation-delay-1000 grid grid-cols-1 md:grid-cols-3 gap-8">
				<div class="hero-benefit-card text-center">
					<div class="hero-benefit-icon mx-auto mb-4">
						<svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<h3 class="text-xl font-semibold mb-2 hero-benefit-title">Shorter queues</h3>
					<p class="hero-benefit-text">Reduce wait times with efficient AI-assisted triage</p>
				</div>
				<div class="hero-benefit-card text-center">
					<div class="hero-benefit-icon mx-auto mb-4">
						<svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
							/>
						</svg>
					</div>
					<h3 class="text-xl font-semibold mb-2 hero-benefit-title">Safer care</h3>
					<p class="hero-benefit-text">NICE-aligned pathways ensure clinical safety</p>
				</div>
				<div class="hero-benefit-card text-center">
					<div class="hero-benefit-icon mx-auto mb-4">
						<svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 13h2l1-3 2 6 2-3 1 2h10"
								opacity="0.6"
							/>
						</svg>
					</div>
					<h3 class="text-xl font-semibold mb-2 hero-benefit-title">Happier patients</h3>
					<p class="hero-benefit-text">Better experience through timely, appropriate care</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- What is Auracare Section -->
<section id="what-is" class="section section-alt">
	<div class="container">
		<div class="text-center mb-16">
			<h2 class="fade-in mb-6">What is Auracare?</h2>
			<p class="fade-in animation-delay-200 text-xl text-neutral-600 max-w-3xl mx-auto">
				Auracare builds AI-enabled triage tools to help medical professionals diagnose common
				illnesses — <strong>even without an on-site doctor.</strong> Using intelligent questionnaires,
				medical-grade hardware, and explainable AI, we give healthcare providers the tools to triage
				and treat patients more efficiently, while maintaining safety and clinical oversight.
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
						<svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							></path>
						</svg>
						Handle more cases per day with clear documentation
					</li>
					<li class="flex items-center">
						<svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							></path>
						</svg>
						Seamless Pharmacy First workflows
					</li>
					<li class="flex items-center">
						<svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
				<div class="product-image-container">
					<img
						src="/Image.jpg"
						alt="Auracare medical diagnostic hardware - AI-powered triage devices including otoscope and diagnostic tools for primary care providers"
						class="product-image"
					/>
				</div>
			</div>
		</div>

		<!-- How it works -->
		<div class="text-center mb-12">
			<h3 class="fade-in text-3xl font-semibold mb-8">How it works</h3>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="feature-card fade-in">
				<div
					class="w-16 h-16 bg-indigo-100 rounded-full mx-auto mb-6 flex items-center justify-center"
				>
					<span class="text-indigo-600 text-2xl font-bold">1</span>
				</div>
				<h4 class="text-xl font-semibold mb-4">Data collection</h4>
				<p class="text-neutral-600">
					Patients complete a structured questionnaire and provide clinical data (e.g. otoscopic
					images) using Auracare-enabled hardware, under the supervision of health professionals.
				</p>
			</div>

			<div class="feature-card fade-in animation-delay-200">
				<div
					class="w-16 h-16 bg-indigo-100 rounded-full mx-auto mb-6 flex items-center justify-center"
				>
					<span class="text-indigo-600 text-2xl font-bold">2</span>
				</div>
				<h4 class="text-xl font-semibold mb-4">AI triage</h4>
				<p class="text-neutral-600">
					Our AI analyzes the inputs, generates a patient-friendly report, and flags whether the
					condition can be treated on-site or if escalation to a specialist is needed.
				</p>
			</div>

			<div class="feature-card fade-in animation-delay-400">
				<div
					class="w-16 h-16 bg-indigo-100 rounded-full mx-auto mb-6 flex items-center justify-center"
				>
					<span class="text-indigo-600 text-2xl font-bold">3</span>
				</div>
				<h4 class="text-xl font-semibold mb-4">Clinical handoff</h4>
				<p class="text-neutral-600">
					When required, cases are seamlessly referred to partner GPs or specialists for online or
					in-person consultations.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Mission Section -->
<section id="mission" class="section">
	<div class="container">
		<div class="text-center mb-16">
			<h2 class="fade-in mb-6">Our Mission</h2>
			<div class="max-w-4xl mx-auto">
				<p class="fade-in animation-delay-200 text-xl text-neutral-600 mb-8">
					Healthcare is too often locked inside hospitals and overstretched clinics. We believe
					every patient deserves fast, accurate access to care - close to where they live.
				</p>
				<p class="fade-in animation-delay-400 text-lg text-neutral-600 mb-8">
					Every community space supported by <strong>health professionals</strong> - whether a
					pharmacy, a school health office, a workplace clinic, or even a mobile unit - can become a
					<strong>point of care</strong>, equipped with the right tools to diagnose, triage, and
					connect patients.
				</p>
				<p class="fade-in animation-delay-600 text-lg text-neutral-600">
					Auracare is not about replacing doctors. It's about ensuring that the patients who reach
					them are the ones who <strong>truly need their expertise</strong> - while giving
					primary-care providers <strong>smarter tools</strong> to serve more people, more effectively.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Roadmap Section -->
<section id="roadmap" class="section section-alt">
	<div class="container">
		<div class="text-center mb-16">
			<h2 class="fade-in mb-6">Roadmap</h2>
			<p class="fade-in animation-delay-200 text-xl text-neutral-600 max-w-3xl mx-auto">
				Our path to transforming primary care
			</p>
		</div>

		<div class="max-w-6xl mx-auto">
			<!-- Timeline Container -->
			<div class="timeline-container relative py-8">
				<!-- Timeline Line -->
				<div class="timeline-line absolute top-1/2 left-0 right-0 h-1 bg-indigo-200 -translate-y-1/2 hidden lg:block"></div>

				<!-- Timeline Items -->
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
					<div class="timeline-item fade-in">
						<div class="roadmap-card">
							<div class="roadmap-quarter">Q4 2025</div>
							<h4 class="roadmap-title text-lg font-semibold text-indigo-600">Limited pilot testing</h4>
							<p class="roadmap-body text-neutral-600 text-sm">Limited pilot testing in the UK</p>
						</div>
					</div>

					<div class="timeline-item fade-in animation-delay-200">
						<div class="roadmap-card">
							<div class="roadmap-quarter">Q1 2026</div>
							<h4 class="roadmap-title text-lg font-semibold text-indigo-600">Expand pilots</h4>
							<p class="roadmap-body text-neutral-600 text-sm">
								Expand pilots to pharmacy groups and partner clinics; collect validation data
							</p>
						</div>
					</div>

					<div class="timeline-item fade-in animation-delay-400">
						<div class="roadmap-card">
							<div class="roadmap-quarter">Q2 2026</div>
							<h4 class="roadmap-title text-lg font-semibold text-indigo-600">Clinical validation</h4>
							<p class="roadmap-body text-neutral-600 text-sm">
								Publish first clinical validation results; pre-production
							</p>
						</div>
					</div>

					<div class="timeline-item fade-in animation-delay-600">
						<div class="roadmap-card">
							<div class="roadmap-quarter">Q3 2026</div>
							<h4 class="roadmap-title text-lg font-semibold text-indigo-600">General release</h4>
							<p class="roadmap-body text-neutral-600 text-sm">
								Receive Class IIa medical device and FDA clearance, general release
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Why Now Section -->
<section id="why-now" class="section">
	<div class="container">
		<div class="text-center mb-16">
			<h2 class="fade-in mb-6">Why now?</h2>
			<p class="fade-in animation-delay-200 text-xl text-neutral-600 max-w-3xl mx-auto">
				Minor ailments account for a large share of GP appointments. With the NHS expanding Pharmacy
				First, pharmacies need simple triage, clear documentation, and safe hand-offs to handle
				increased demand at scale.
			</p>
		</div>

		<div class="flex justify-center">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
				<div class="text-center healthcare-bg p-8 rounded-lg fade-in animation-delay-400">
					<div class="stat-number">30%</div>
					<div class="stat-label font-semibold">of GP visits covered</div>
					<p class="text-sm text-neutral-500 mt-2">
						GP appointments that can be handled with Auracare
					</p>
				</div>
				<div class="text-center healthcare-bg p-8 rounded-lg fade-in animation-delay-600">
					<div class="stat-number">95%</div>
					<div class="stat-label font-semibold">accuracy rate</div>
					<p class="text-sm text-neutral-500 mt-2">
						Diagnostic accuracy in clinical validation
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Use Cases Section -->
<section id="use-cases" class="section section-alt">
	<div class="container">
		<div class="text-center mb-16">
			<h2 class="fade-in mb-6">Use cases</h2>
			<p class="fade-in animation-delay-200 text-xl text-neutral-600 max-w-3xl mx-auto">
				Transforming care delivery across different healthcare settings
			</p>
		</div>

		<div class="max-w-4xl mx-auto space-y-4">
			{#each useCases as useCase, index}
                <div class="use-case-card fade-in" style="animation-delay: {index * 100}ms">
                    <button
                        class="use-case-trigger w-full text-left p-6 rounded-lg focus:outline-none"
                        aria-expanded={expandedUseCase === useCase.id}
                        aria-controls={`usecase-${useCase.id}`}
                        onclick={() => toggleUseCase(useCase.id)}
                    >
						<div class="flex items-center justify-between">
							<div>
								<h3 class="text-xl font-semibold mb-2 text-neutral-900">{useCase.title}</h3>
								<p class="text-neutral-600 italic">{useCase.subtitle}</p>
							</div>
							<svg
								class="w-6 h-6 text-neutral-400 transition-transform duration-200 {expandedUseCase ===
								useCase.id
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
						</div>
					</button>

                    {#if expandedUseCase === useCase.id}
                        <div id={`usecase-${useCase.id}`} class="use-case-content px-6 pb-6 text-neutral-600 leading-relaxed" transition:slide={{ duration: 180 }}>
                            <p>{useCase.content}</p>
                        </div>
                    {/if}
                </div>
			{/each}
		</div>
	</div>
</section>

<!-- Built for Trust Section -->
<section id="trust" class="section">
	<div class="container">
		<div class="text-center mb-16">
			<h2 class="fade-in mb-6">Built for trust</h2>
			<p class="fade-in animation-delay-200 text-xl text-neutral-600 max-w-3xl mx-auto">
				Our principles guide everything we build
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<div class="trust-card fade-in">
				<div class="trust-icon mb-4">
					<svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
						/>
					</svg>
				</div>
				<h4 class="text-lg font-semibold mb-3">Clinician-led design</h4>
				<p class="text-neutral-600 text-sm">Built with providers, not against them</p>
			</div>

			<div class="trust-card fade-in animation-delay-200">
				<div class="trust-icon mb-4">
					<svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</div>
				<h4 class="text-lg font-semibold mb-3">Explainable AI</h4>
				<p class="text-neutral-600 text-sm">Transparent, evidence-based outputs</p>
			</div>

			<div class="trust-card fade-in animation-delay-400">
				<div class="trust-icon mb-4">
					<svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
						/>
					</svg>
				</div>
				<h4 class="text-lg font-semibold mb-3">Privacy-first</h4>
				<p class="text-neutral-600 text-sm">Anonymised and secure by design</p>
			</div>

			<div class="trust-card fade-in animation-delay-600">
				<div class="trust-icon mb-4">
					<svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
						/>
					</svg>
				</div>
				<h4 class="text-lg font-semibold mb-3">Open collaboration</h4>
				<p class="text-neutral-600 text-sm">
					Working with health partners to validate, test, and refine
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

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{#each teamMembers as member, index}
				<div class="team-card fade-in" style="animation-delay: {index * 50}ms">
					<div
						class="w-16 h-16 bg-gradient-to-br from-primary-400 to-healthcare-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-lg font-semibold"
					>
						{member.name
							.split(' ')
							.map((n) => n[0])
							.join('')}
					</div>
					<h3 class="text-base font-semibold mb-1">{member.name}</h3>
					<p class="text-neutral-600 text-sm mb-2">{member.role}</p>
					<span
						class="inline-block px-2 py-1 text-xs rounded-full {member.status === 'Full-time'
							? 'bg-green-100 text-green-700'
							: member.status === 'Part-time'
								? 'bg-indigo-100 text-indigo-700'
								: member.status === 'Advisor'
									? 'bg-blue-100 text-blue-700'
									: member.status === 'Freelance'
										? 'bg-amber-100 text-amber-700'
										: member.status === 'Inactive'
											? 'bg-gray-100 text-gray-600'
											: 'bg-gray-100 text-gray-600'}">{member.status}</span
					>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- FAQ Section -->
<section id="faq" class="section section-alt">
	<div class="container">
		<div class="text-center mb-16">
			<h2 class="fade-in mb-6">Frequently Asked Questions</h2>
			<p class="fade-in animation-delay-200 text-xl text-neutral-600 max-w-3xl mx-auto">
				Common questions about Auracare
			</p>
		</div>

		<div class="max-w-3xl mx-auto">
			<div class="space-y-6">
				<div class="faq-item fade-in">
					<h3 class="text-lg font-semibold mb-3 text-neutral-900">
						How does Auracare ensure clinical safety?
					</h3>
					<p class="text-neutral-600">
						Our platform is built with clinical oversight at every step, using NICE-aligned pathways
						and transparent AI reasoning to support healthcare professionals in making informed
						decisions.
					</p>
				</div>

				<div class="faq-item fade-in animation-delay-200">
					<h3 class="text-lg font-semibold mb-3 text-neutral-900">
						What type of medical device certification will Auracare have?
					</h3>
					<p class="text-neutral-600">
						We are working toward Class IIa medical device certification and FDA clearance, expected
						in Q3 2026.
					</p>
				</div>

				<div class="faq-item fade-in animation-delay-400">
					<h3 class="text-lg font-semibold mb-3 text-neutral-900">
						How does Auracare integrate with existing healthcare systems?
					</h3>
					<p class="text-neutral-600">
						Our platform is designed to integrate seamlessly with existing practice management
						systems and clinical workflows, requiring minimal disruption to current operations.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section id="contact" class="section section-alt">
	<div class="container">
		<div class="text-center max-w-3xl mx-auto">
			<h2 class="fade-in mb-6">Get in touch</h2>
			<p class="fade-in animation-delay-200 text-xl text-neutral-600 mb-8">
				Interested in a free demo of Auracare or partnering with us on research? Reach out to
				discuss trials, integrations, and clinical validation.
			</p>
			<div class="fade-in animation-delay-400 flex flex-col sm:flex-row gap-4 justify-center">
				<a
					href="mailto:hello@auracare.com?subject=Auracare%20Demo%20Request&body=Hello%2C%20I%20was%20browsing%20your%20website%20and%20am%20interested%20in%20a%20demo.%20Could%20you%20share%20next%20steps%3F%0A%0AName%3A%0AOrganization%3A%0ARole%3A%0APreferred%20time%2Ftimezone%3A"
					class="btn btn-primary btn-lg"
					>Request a demo</a
				>
				<a
					href="mailto:hello@auracare.com?subject=Work%20with%20Auracare&body=Hello%2C%20I%20was%20browsing%20your%20website%20and%20am%20interested%20in%20working%20together.%20Could%20we%20set%20up%20a%20chat%3F%0A%0AName%3A%0AOrganization%3A%0ARole%3A%0ATopic%20of%20interest%3A"
					class="btn btn-secondary btn-lg"
					>Work with us</a
				>
			</div>
		</div>
	</div>
</section>

<!-- Footer -->
<footer class="bg-neutral-900 text-white py-16">
	<div class="container">
		<!-- Main Footer Content -->
		<div class="flex flex-col lg:flex-row gap-12 lg:gap-16">
			<!-- Company Info Section -->
			<div class="flex-1">
				<div class="flex items-center mb-6">
					<img
						src="/SVG/Asset 5.svg"
						alt="Auracare - AI-Powered Triage for Primary Care"
						class="h-10 w-auto brightness-0 invert"
					/>
				</div>
				<p class="text-neutral-300 mb-6 text-lg leading-relaxed">
					AI-powered triage for primary care providers. <br />
					<span class="text-white font-medium">Smarter triage. Faster care. Better outcomes.</span>
				</p>
				<div class="space-y-3 text-sm text-neutral-400">
					<p>
						<strong class="text-neutral-300">Auracare Health LTD</strong><br />Company number
						16747281
					</p>
					<p>UK-led, building toward broader EU deployment</p>
				</div>
			</div>

			<!-- Navigation Links Section -->
			<div class="flex-1">
				<div class="flex flex-col md:flex-row gap-8 md:gap-12">
					<div class="flex-1">
						<ul class="space-y-3 text-neutral-400">
							<li>
								<a href="#what-is" class="hover:text-indigo-400 transition-colors"
									>What is Auracare?</a
								>
							</li>
							<li>
								<a href="#mission" class="hover:text-indigo-400 transition-colors">Our Mission</a>
							</li>
							<li>
								<a href="#roadmap" class="hover:text-indigo-400 transition-colors">Roadmap</a>
							</li>
							<li>
								<a href="#use-cases" class="hover:text-indigo-400 transition-colors">Use Cases</a>
							</li>
							<li><a href="#team" class="hover:text-indigo-400 transition-colors">Our Team</a></li>
							<li>
								<a href="#trust" class="hover:text-indigo-400 transition-colors">Built for Trust</a>
							</li>
							<li><a href="#faq" class="hover:text-indigo-400 transition-colors">FAQs</a></li>
							<li>
								<a
									href="https://github.com/auracare-org/auracare"
									target="_blank"
									rel="noopener noreferrer"
									class="hover:text-indigo-400 transition-colors">GitHub</a
								>
							</li>
						</ul>
					</div>

					<!-- CTA Section -->
					<div class="flex-1">
						<div class="space-y-4 mb-6">
							<a
								href="mailto:hello@auracare.com?subject=Auracare%20Demo%20Request&body=Hello%2C%20I%20was%20browsing%20your%20website%20and%20am%20interested%20in%20a%20demo.%20Could%20you%20share%20next%20steps%3F%0A%0AName%3A%0AOrganization%3A%0ARole%3A%0APreferred%20time%2Ftimezone%3A"
								class="btn btn-primary w-full"
								>Request a demo</a
							>
							<a
								href="mailto:hello@auracare.com?subject=Work%20with%20Auracare&body=Hello%2C%20I%20was%20browsing%20your%20website%20and%20am%20interested%20in%20working%20together.%20Could%20we%20set%20up%20a%20chat%3F%0A%0AName%3A%0AOrganization%3A%0ARole%3A%0ATopic%20of%20interest%3A"
								class="btn btn-secondary w-full"
								>Work with us</a
							>
						</div>
						<div class="text-sm text-neutral-400">
							<p class="mb-2"><strong class="text-neutral-300">Contact:</strong></p>
							<a href="mailto:hello@auracare.com" class="hover:text-indigo-400 transition-colors"
								>hello@auracare.com</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="border-t border-neutral-800 mt-12 pt-8">
			<div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
				<p class="text-neutral-400 text-sm">
					&copy; 2025 Auracare Health LTD. All rights reserved.
				</p>
				<div class="flex flex-col md:flex-row gap-4 md:gap-6 text-sm text-neutral-400">
					<button type="button" class="hover:text-indigo-400 transition-colors" disabled
						>Privacy Policy</button
					>
					<button type="button" class="hover:text-indigo-400 transition-colors" disabled
						>Terms of Service</button
					>
					<button type="button" class="hover:text-indigo-400 transition-colors" disabled
						>Cookies</button
					>
				</div>
			</div>
		</div>
	</div>
</footer>
