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

		// Observe all elements with fade-in class
		document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach((el) => {
			observer.observe(el);
		});

		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>Auracare - AI Triage for Primary Care</title>
	<meta
		name="description"
		content="AI triage + diagnostics for primary care. Assess, document, and route patients in minutes — aligned to NICE pathways and built for Pharmacy First."
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<h1 class="text-center">Hello World</h1>

<div class="min-h-screen bg-white">
	{@render children?.()}
</div>
