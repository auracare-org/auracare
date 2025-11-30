<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { slide } from 'svelte/transition';

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	let { children } = $props();
	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	onMount(() => {
		// Intersection Observer for animations
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
					}
				});
			},
			{ threshold: 0.1 }
		);

		const observeElements = () => {
			document
				.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .slide-in-up, .timeline-line')
				.forEach((el) => observer.observe(el));
		};

		// Observe initial elements
		observeElements();

		// Re-observe after client-side navigations so new sections animate correctly
		afterNavigate(() => {
			observeElements();
			closeMobileMenu();
		});

		return () => {
			observer.disconnect();
		};
	});
</script>

<svelte:head>
	<title>Auracare - AI-Powered Triage for Primary Care Providers</title>
	<meta
		name="description"
		content="Auracare builds AI-enabled triage tools to help medical professionals diagnose common illnesses. Smarter triage. Faster care. Better outcomes. Built for UK healthcare providers."
	/>
	<meta
		name="keywords"
		content="AI triage, primary care, healthcare technology, medical diagnostics, Pharmacy First, NHS, clinical decision support, healthcare AI"
	/>
	<meta name="author" content="Auracare Health LTD" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://auracare.com/" />
	<meta property="og:title" content="Auracare - AI-Powered Triage for Primary Care Providers" />
	<meta
		property="og:description"
		content="AI-enabled triage tools helping medical professionals diagnose common illnesses. Smarter triage. Faster care. Better outcomes."
	/>
	<meta property="og:image" content="https://auracare.com/og-image.png" />
	<meta property="og:site_name" content="Auracare" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://auracare.com/" />
	<meta name="twitter:title" content="Auracare - AI-Powered Triage for Primary Care Providers" />
	<meta
		name="twitter:description"
		content="AI-enabled triage tools helping medical professionals diagnose common illnesses. Smarter triage. Faster care. Better outcomes."
	/>
	<meta name="twitter:image" content="https://auracare.com/twitter-image.png" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://auracare.com/" />

	<!-- Favicon -->
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="icon" type="image/png" href="/favicon.png" />

	<!-- Preconnect to external domains -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;700&display=swap"
		rel="stylesheet"
	/>

	<!-- Structured Data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			"name": "Auracare Health LTD",
			"description": "AI-powered triage for primary care providers. Building tools to help medical professionals diagnose common illnesses safely and efficiently.",
			"url": "https://auracare.com",
			"logo": "https://auracare.com/SVG/Asset 5.svg",
			"foundingDate": "2025",
			"founder": [
				{
					"@type": "Person",
					"name": "Hinlun Chen"
				}
			],
			"address": {
				"@type": "PostalAddress",
				"addressCountry": "GB"
			},
			"contactPoint": {
				"@type": "ContactPoint",
				"email": "hinlin@auracare.com",
				"contactType": "Customer Service"
			},
			"sameAs": ["https://github.com/auracare-org/auracare"]
		}
	</script>
</svelte:head>

<!-- Navigation Header -->
<header
	class="fixed top-0 left-0 right-0 z-50"
	style="background: rgba(255, 255, 255, 0.98); backdrop-filter: blur(12px); border-bottom: 1px solid var(--color-border-default);"
>
	<nav class="container py-4">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-8">
				<!-- Logo -->
				<a href="/" class="flex items-center">
					<img src="/SVG/Asset 5.svg" alt="Auracare" class="h-5 md:h-6 w-auto" />
				</a>

				<!-- Desktop Navigation -->
				<div class="hidden md:flex items-center gap-6">
					<a
						href="/#howitworks"
						class="text-neutral-900 hover:text-primary-600 transition-colors text-sm font-medium"
						>Features</a
					>

					<!-- About Us Dropdown -->
					<div class="relative group">
						<button
							class="text-neutral-900 hover:text-primary-600 transition-colors text-sm font-medium flex items-center gap-1"
						>
							About us
							<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
						<div
							class="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
						>
							<a
								href="/about#team"
								class="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-primary-600 transition-colors first:rounded-t-lg"
								>Our Team</a
							>
							<a
								href="/about#journey"
								class="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-primary-600 transition-colors last:rounded-b-lg"
								>Our Journey</a
							>
						</div>
					</div>

					<a
						href="/join-us"
						class="text-neutral-900 hover:text-primary-600 transition-colors text-sm font-medium"
						>Join our mission</a
					>
				</div>
			</div>

			<!-- CTA Buttons -->
			<div class="hidden md:flex items-center gap-3">
				<a
					href="/#contact"
					class="btn py-2 px-4 text-sm"
					style="background: var(--color-bg-button-secondary-default); color: var(--color-text-button-secondary-default); border-radius: 8px; font-weight: 600;"
					>Contact Us</a
				>
				<a
					href="https://pathways.auracarehealth.com/"
					class="btn py-2 px-4 text-sm"
					style="background: var(--color-bg-button-primary-default); color: white; border-radius: 8px; font-weight: 600;"
					>Try for free</a
				>
			</div>

			<!-- Mobile Menu Button -->
			<button class="md:hidden text-neutral-900" aria-label="Menu" onclick={toggleMobileMenu}>
				{#if mobileMenuOpen}
					<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				{:else}
					<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				{/if}
			</button>
		</div>

		<!-- Mobile Menu Dropdown -->
		{#if mobileMenuOpen}
			<div class="md:hidden mt-4" transition:slide={{ duration: 300 }}>
				<div class="flex flex-col gap-3 py-4 border-t border-neutral-200">
					<a
						href="/#howitworks"
						class="text-neutral-900 hover:text-primary-600 transition-colors text-sm font-medium py-2"
						onclick={closeMobileMenu}
					>
						Features
					</a>
					<a
						href="/about#team"
						class="text-neutral-900 hover:text-primary-600 transition-colors text-sm font-medium py-2"
						onclick={closeMobileMenu}
					>
						Our Team
					</a>
					<a
						href="/about#journey"
						class="text-neutral-900 hover:text-primary-600 transition-colors text-sm font-medium py-2"
						onclick={closeMobileMenu}
					>
						Our Journey
					</a>
					<a
						href="/join-us"
						class="text-neutral-900 hover:text-primary-600 transition-colors text-sm font-medium py-2"
						onclick={closeMobileMenu}
					>
						Join our mission
					</a>
					<div class="flex flex-col gap-2 mt-2 pt-3 border-t border-neutral-200">
						<a
							href="/#contact"
							class="btn py-2 px-4 text-sm text-center"
							style="background: var(--color-bg-button-secondary-default); color: var(--color-text-button-secondary-default); border-radius: 8px; font-weight: 600;"
							onclick={closeMobileMenu}
						>
							Contact Us
						</a>
						<a
							href="https://pathways.auracarehealth.com/"
							class="btn py-2 px-4 text-sm text-center"
							style="background: var(--color-bg-button-primary-default); color: white; border-radius: 8px; font-weight: 600;"
							onclick={closeMobileMenu}
						>
							Try for free
						</a>
					</div>
				</div>
			</div>
		{/if}
	</nav>
</header>

<main class="site-content">
	{@render children?.()}
</main>

<!-- Footer -->
<footer class="footer-gradient py-12">
	<div class="container">
		<div class="grid md:grid-cols-2 gap-8 mb-8">
			<!-- Left: Logo and Links -->
			<div>
				<img src="/SVG/Asset 5.svg" alt="Auracare" class="h-6 mb-6 brightness-0 invert" />
				<nav class="flex flex-col gap-3">
					<a href="/#howitworks" class="text-white hover:opacity-80 transition-opacity text-sm"
						>Features</a
					>
					<a href="/about" class="text-white hover:opacity-80 transition-opacity text-sm"
						>About Us</a
					>
					<a href="/join-us" class="text-white hover:opacity-80 transition-opacity text-sm"
						>Join Our Mission</a
					>
					<button
						onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
						class="text-white hover:opacity-80 transition-opacity text-sm text-left"
					>
						Back To Top
					</button>
				</nav>
			</div>

			<!-- Right: Newsletter -->
			<div>
				<h3 class="text-white font-semibold mb-4">Stay in the loop with our latest updates</h3>
				<form
					class="flex gap-2"
					onsubmit={(e) => {
						e.preventDefault();
						const form = e.currentTarget;
						const formData = new FormData(form);
						const email = formData.get('email');
						window.location.href = `mailto:hinlun@auracare.org.uk?subject=Newsletter Signup&body=Please add ${email} to the mailing list.`;
					}}
				>
					<input
						type="email"
						name="email"
						placeholder="Enter your email"
						required
						class="flex-1 px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/50"
					/>
					<button
						type="submit"
						class="btn bg-white text-primary-600 hover:bg-white/90 px-4 py-2 rounded-lg"
						aria-label="Subscribe"
					>
						<svg
							class="w-5 h-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
						</svg>
					</button>
				</form>
			</div>
		</div>

		<!-- Bottom -->
		<div class="border-t border-white/20 pt-6 flex flex-wrap justify-between gap-4 text-sm">
			<p class="text-white/60">&copy; {new Date().getFullYear()} Auracarehealth LTD</p>
			<div class="flex gap-4 text-white">
				<!--  
				<a href="/privacy" class="hover:opacity-80 transition-opacity">Privacy policy</a>
				<a href="/terms" class="hover:opacity-80 transition-opacity">Terms of service</a> -->
				<a href="/#contact" class="hover:opacity-80 transition-opacity">Contact information</a>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer-gradient {
		background: linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-primary-600) 100%);
	}
</style>
