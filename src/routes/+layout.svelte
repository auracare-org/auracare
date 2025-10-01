<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';

	let { children } = $props();

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

		// Observe all elements with animation classes
		document
			.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .slide-in-up')
			.forEach((el) => {
				observer.observe(el);
			});

		return () => observer.disconnect();
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
		href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
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
				"email": "hello@auracare.com",
				"contactType": "Customer Service"
			},
			"sameAs": ["https://github.com/auracare-org/auracare"]
		}
	</script>
</svelte:head>

<div class="min-h-screen bg-white">
	{@render children?.()}
</div>
