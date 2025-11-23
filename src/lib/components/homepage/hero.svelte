<script lang="ts">
	import { onMount } from 'svelte';

	const headlineBlack = 'Faster, smarter triage for';
	const headlineBlue = 'primary care providers';
	const subline =
		'Auracare builds the hardware and software that makes primary care triage more accurate, explainable, and efficient.';
	const buttonSec = 'Learn more';
	const buttonSecLink = '#howitworks';
	const buttonPri = 'Request a demo';
	const buttonPriLink = '#contact';

	let showScrollArrow = $state(false);

	onMount(() => {
		const handleScroll = () => {
			showScrollArrow = window.scrollY < 100;
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function scrollToContent() {
		const nextSection = document.querySelector('.hero-section')?.nextElementSibling;
		if (nextSection) {
			nextSection.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<section class="hero-section">
	<div class="container">
		<div class="hero-content">
			<h1 class="hero-title">
				<span class="hero-title__black">{headlineBlack} </span>
				<br />
				<span class="hero-title__blue">{headlineBlue}</span>
			</h1>

			<p class="hero-description">{subline}</p>

			<div class="hero-buttons">
				<a href={buttonSecLink} class="btn-secondary">{buttonSec}</a>
				<a href={buttonPriLink} class="btn-primary">{buttonPri}</a>
			</div>
		</div>
	</div>

	{#if showScrollArrow}
		<button class="scroll-arrow" onclick={scrollToContent} aria-label="Scroll to content">
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 5V19M12 19L19 12M12 19L5 12"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
	{/if}
</section>

<style>
	.hero-section {
		background: white;
		padding: 120px 32px;
		width: 100%;
	}

	.container {
		max-width: 1204px;
		margin: 0 auto;
	}

	.hero-content {
		max-width: 860px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 40px;
		align-items: center;
	}

	.hero-title {
		font-family: 'Poppins', sans-serif;
		font-size: 72px;
		font-weight: 400;
		line-height: 72px;
		text-align: center;
		margin: 0;
		width: 1070px;
		max-width: 100%;
	}

	.hero-title__black {
		color: #101828;
		white-space: nowrap;
	}

	.hero-title__blue {
		color: #2f4ec0;
	}

	.hero-description {
		font-family: 'Poppins', sans-serif;
		font-size: 20px;
		font-weight: 400;
		line-height: 28px;
		text-align: center;
		color: #4a5565;
		opacity: 0.8;
		margin: 0;
		padding: 0 80px;
	}

	.hero-buttons {
		display: flex;
		gap: 12px;
		align-items: center;
	}

	.btn-secondary {
		background: #d5dcf2;
		color: #2f4ec0;
		padding: 16px 20px;
		border-radius: 6px;
		font-family: 'Poppins', sans-serif;
		font-size: 18px;
		font-weight: 500;
		line-height: 28px;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 80px;
		transition: all 0.3s ease;
	}

	.btn-secondary:hover {
		background: #c5cce8;
		transform: translateY(-2px);
	}

	.btn-primary {
		background: #2f4ec0;
		color: white;
		padding: 16px 20px;
		border-radius: 6px;
		font-family: 'Poppins', sans-serif;
		font-size: 18px;
		font-weight: 500;
		line-height: 28px;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 80px;
		transition: all 0.3s ease;
		box-shadow: 0 4px 12px rgba(47, 78, 192, 0.25);
	}

	.btn-primary:hover {
		background: #2640a7;
		transform: translateY(-2px);
		box-shadow: 0 8px 16px rgba(47, 78, 192, 0.35);
	}

	.scroll-arrow {
		position: absolute;
		bottom: 40px;
		left: 50%;
		transform: translateX(-50%);
		background: transparent;
		border: none;
		color: #2f4ec0;
		cursor: pointer;
		padding: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease;
		animation: bounce 2s infinite;
		z-index: 10;
	}

	.scroll-arrow:hover {
		color: #2640a7;
		transform: translateX(-50%) translateY(4px);
	}

	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateX(-50%) translateY(0);
		}
		40% {
			transform: translateX(-50%) translateY(-10px);
		}
		60% {
			transform: translateX(-50%) translateY(-5px);
		}
	}

	/* Responsive */
	@media (max-width: 768px) {
		.hero-section {
			padding: 60px 24px;
		}

		.hero-title {
			font-size: 48px;
			line-height: 56px;
		}

		.hero-description {
			font-size: 18px;
			line-height: 26px;
			padding: 0 20px;
		}

		.hero-buttons {
			flex-direction: column;
			width: 100%;
		}

		.btn-secondary,
		.btn-primary {
			width: 100%;
		}

		.scroll-arrow {
			bottom: 20px;
		}
	}
</style>
