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
	style="background: rgba(255, 255, 255, 0.98); backdrop-filter: blur(12px); border-bottom: 1px solid #e5e7eb;"
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
								class="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-primary-600 transition-colors"
								>Our Journey</a
							>
							<a
								href="/about#values"
								class="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-primary-600 transition-colors last:rounded-b-lg"
								>Our Values</a
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
					class="btn transition-all"
					style="background: var(--color-bg-button-secondary-default); color: var(--color-text-button-secondary-default); border-radius: 6px; font-weight: 500; font-family: 'Poppins', sans-serif; font-size: 16px; line-height: 24px; padding: 8px 12px; display: inline-flex; align-items: center; min-width: 80px; justify-content: center;"
					>Contact Us</a
				>
				<a
					href="https://pathways.auracarehealth.com/"
					class="btn transition-all"
					style="background: var(--color-bg-button-primary-default); color: var(--color-text-button-primary-default); border-radius: 6px; font-weight: 500; font-family: 'Poppins', sans-serif; font-size: 16px; line-height: 24px; padding: 8px 12px; display: inline-flex; align-items: center; min-width: 80px; justify-content: center;"
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
						href="/about#values"
						class="text-neutral-900 hover:text-primary-600 transition-colors text-sm font-medium py-2"
						onclick={closeMobileMenu}
					>
						Our Values
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
							class="btn text-center transition-all"
							style="background: var(--color-bg-button-secondary-default); color: var(--color-text-button-secondary-default); border-radius: 6px; font-weight: 500; font-family: 'Poppins', sans-serif; font-size: 16px; line-height: 24px; padding: 8px 16px; display: inline-flex; align-items: center; justify-content: center;"
							onclick={closeMobileMenu}
						>
							Contact Us
						</a>
						<a
							href="https://pathways.auracarehealth.com/"
							class="btn text-center transition-all"
							style="background: var(--color-bg-button-primary-default); color: var(--color-text-button-primary-default); border-radius: 6px; font-weight: 500; font-family: 'Poppins', sans-serif; font-size: 16px; line-height: 24px; padding: 8px 16px; display: inline-flex; align-items: center; justify-content: center;"
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
<footer class="footer">
	<div class="footer-container">
		<!-- Left: Logo and Links -->
		<div class="footer-left">
			<div class="footer-logo">
				<img src="/SVG/Asset 5.svg" alt="Auracare" class="logo-img" />
			</div>
			<nav class="footer-nav">
				<a href="/#howitworks" class="footer-link">Features</a>
				<a href="/about" class="footer-link">About Us</a>
				<a href="/join-us" class="footer-link">Join Our Mission</a>
				<button
					onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					class="footer-link footer-button"
				>
					Back To Top
				</button>
			</nav>
		</div>

		<!-- Right: Newsletter -->
		<div class="footer-right">
			<h3 class="footer-newsletter-title">Stay in the loop with our latest updates</h3>
			<form
				class="footer-newsletter-form"
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
					class="newsletter-input"
				/>
				<button
					type="submit"
					class="newsletter-submit"
					aria-label="Subscribe"
				>
					<svg
						class="submit-icon"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="3"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
					</svg>
				</button>
			</form>
		</div>
	</div>

	<!-- Bottom -->
	<div class="footer-bottom">
		<div class="footer-bottom-container">
			<div class="footer-bottom-left">
				<p class="footer-copyright">&copy; {new Date().getFullYear()} Auracare.</p>
				<a href="/#privacy" class="footer-bottom-link">Privacy policy</a>
				<a href="/#terms" class="footer-bottom-link">Terms of service</a>
				<a href="/#contact" class="footer-bottom-link">Contact information</a>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 48px 96.5px 0px;
		gap: 48px;
		background: var(--color-bg-button-primary-default);
	}

	.footer-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		gap: 48px;
		width: 100%;
		max-width: 1247px;
		margin: 0 auto;
	}

	.footer-left {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 24px;
		max-width: 599.5px;
	}

	.footer-logo {
		height: 32px;
	}

	.logo-img {
		height: 18.14px;
		width: 139.1px;
		filter: brightness(0) invert(1);
	}

	.footer-nav {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 12px;
	}

	.footer-link {
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: rgba(255, 255, 255, 0.9);
		text-decoration: none;
		transition: opacity 0.2s ease;
		border: none;
		background: none;
		cursor: pointer;
		padding: 0;
		text-align: left;
	}

	.footer-link:hover {
		opacity: 0.8;
	}

	.footer-button {
		width: auto;
	}

	.footer-right {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 24px;
		max-width: 599.5px;
	}

	.footer-newsletter-title {
		font-family: 'Poppins', sans-serif;
		font-weight: 600;
		font-size: 24px;
		line-height: 32px;
		color: #ffffff;
		margin: 0;
	}

	.footer-newsletter-form {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		gap: 8px;
		width: 100%;
	}

	.newsletter-input {
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 4px 12px;
		flex: 1;
		height: 48px;
		background: rgba(229, 229, 229, 0.3);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 6.8px;
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
		font-size: 14px;
		line-height: 21px;
		color: rgba(255, 255, 255, 0.6);
	}

	.newsletter-input::placeholder {
		color: rgba(255, 255, 255, 0.6);
	}

	.newsletter-input:focus {
		outline: none;
		border-color: rgba(255, 255, 255, 0.5);
		color: #ffffff;
	}

	.newsletter-submit {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 0px;
		width: 48px;
		height: 48px;
		background: #ffffff;
		border-radius: 6.8px;
		border: none;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.newsletter-submit:hover {
		background: rgba(255, 255, 255, 0.9);
	}

	.submit-icon {
		width: 27px;
		height: 27px;
		color: var(--color-text-header-primary);
	}

	.footer-bottom {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 33px 0px 0px;
		width: 100%;
		border-top: 1px solid rgba(255, 255, 255, 0.2);
		padding-bottom: 33px;
	}

	.footer-bottom-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		max-width: 1247px;
		margin: 0 auto;
	}

	.footer-bottom-left {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 16px;
	}

	.footer-copyright {
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
		font-size: 16px;
		line-height: 26px;
		color: rgba(255, 255, 255, 0.8);
		margin: 0;
	}

	.footer-bottom-link {
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
		font-size: 14px;
		line-height: 20px;
		color: rgba(255, 255, 255, 0.8);
		text-decoration: none;
		transition: opacity 0.2s ease;
	}

	.footer-bottom-link:hover {
		opacity: 0.8;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.footer {
			padding: 40px 24px;
		}

		.footer-container {
			flex-direction: column;
			gap: 32px;
		}

		.footer-left,
		.footer-right {
			max-width: 100%;
		}

		.footer-bottom-left {
			flex-wrap: wrap;
		}
	}
</style>
