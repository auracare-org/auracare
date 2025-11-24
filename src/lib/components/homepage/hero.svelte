<script lang="ts">
	const headlineWhite = 'Faster, Smarter Triage for';
	const headlineBlue = 'Primary Care Providers';
	const subline =
		'Auracare builds the hardware and software that makes primary care triage more accurate, explainable, and efficient.';
	const buttonSec = 'Learn More';
	const buttonSecLink = '#howitworks';
	const buttonPri = 'View Product';
	const buttonPriLink = 'https://pathways.auracarehealth.com/';
</script>

<section class="hero-section hero-surface">
	<div aria-hidden="true" class="hero-surface__glow"></div>
	<span class="bubble hero-bubble bubble-float-1" style="--bubble-size: 520px; top: -180px; right: -160px;"></span>
	<span
		class="bubble hero-bubble bubble-float-2"
		style="--bubble-size: 320px; --bubble-color: rgba(111, 134, 255, 0.35); bottom: -140px; left: 5%; --bubble-blur: 10px;"
	></span>
	<span
		class="bubble hero-bubble bubble-float-3"
		style="--bubble-size: 200px; --bubble-color: rgba(255, 255, 255, 0.5); top: 30%; left: 12%; --bubble-opacity: 0.7;"
	></span>

	<div class="container py-20 md:py-32 relative z-10">
		<div class="text-center slide-in-up">
			<div class="hero-badge">
				<span class="hero-badge__dot"></span>
				Digitally enhanced primary care
			</div>

			<h1 class="mx-auto mb-8 hero-title">
				<span class="hero-title__muted">{headlineWhite}</span>
				<span class="hero-title__accent">{headlineBlue}</span>
			</h1>

			<p class="hero-subhead">{subline}</p>

			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
				<a href={buttonPriLink} class="btn btn-lg hero-cta-primary">{buttonPri}</a>
				<a href={buttonSecLink} class="btn btn-lg hero-cta-secondary">{buttonSec}</a>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-surface {
		position: relative;
		overflow: visible;
		background: transparent;
	}

	.hero-surface::after {
		content: '';
		position: absolute;
		left: -5%;
		right: -5%;
		bottom: -180px;
		height: 260px;
		background: radial-gradient(circle, rgba(239, 243, 255, 0.85), transparent 70%);
		filter: blur(35px);
		z-index: 0;
	}

	.hero-surface__glow {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(circle at 70% 0%, rgba(79, 111, 237, 0.15), transparent 55%),
			radial-gradient(circle at 20% 80%, rgba(111, 134, 255, 0.18), transparent 40%),
			rgba(255, 255, 255, 0.4);
		filter: blur(2px);
		z-index: 0;
	}

	.hero-bubble {
		box-shadow: 0 20px 45px rgba(63, 82, 214, 0.15);
	}

	.hero-title {
		line-height: 1.1;
		font-weight: 700;
		max-width: 1000px;
		font-size: clamp(3rem, 8vw, 6.5rem);
		margin-left: auto;
		margin-right: auto;
	}

	.hero-title__muted {
		display: block;
		color: var(--color-text-header-secondary);
	}

	.hero-title__accent {
		display: block;
		background: linear-gradient(120deg, var(--color-primary-600) 0%, var(--color-primary-400) 35%, var(--color-primary-300) 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		color: transparent;
		text-shadow: 0 10px 35px rgba(47, 78, 192, 0.25);
	}

	.hero-subhead {
		color: var(--color-text-body-primary);
		font-size: clamp(1rem, 2vw, 1.375rem);
		max-width: 720px;
		margin: 0 auto;
		opacity: 0.85;
	}

	.hero-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		margin: 0 auto 1.5rem auto;
		padding: 0.4rem 1rem;
		border-radius: 999px;
		background: rgba(47, 78, 192, 0.12);
		color: var(--color-neutral-900);
		font-weight: 600;
		font-size: 0.95rem;
		border: 1px solid var(--color-white-alpha-70);
		backdrop-filter: blur(10px);
	}

	.hero-badge__dot {
		width: 10px;
		height: 10px;
		border-radius: 999px;
		background: var(--color-success);
		box-shadow: 0 0 0 6px rgba(52, 211, 153, 0.2);
	}

	.hero-cta-primary {
		background: linear-gradient(120deg, var(--color-bg-button-primary-default), var(--color-bg-button-primary-hover));
		color: white;
		border-radius: 999px;
		font-weight: 600;
		padding: 0.875rem 2.5rem;
		box-shadow: 0 30px 60px rgba(47, 78, 192, 0.35);
		border: none;
	}

	.hero-cta-primary:hover {
		transform: translateY(-2px);
	}

	.hero-cta-secondary {
		background: var(--color-white-alpha-70);
		border: 1px solid rgba(47, 78, 192, 0.2);
		color: var(--color-text-header-secondary);
		border-radius: 999px;
		font-weight: 600;
		padding: 0.875rem 2.5rem;
		backdrop-filter: blur(6px);
		box-shadow: 0 20px 35px rgba(15, 23, 42, 0.1);
	}

	.hero-cta-secondary:hover {
		transform: translateY(-2px);
	}

	@keyframes bubble-float {
		0%, 100% {
			transform: translateY(0) translateX(0) scale(1);
		}
		25% {
			transform: translateY(-15px) translateX(5px) scale(1.02);
		}
		50% {
			transform: translateY(-8px) translateX(-3px) scale(0.98);
		}
		75% {
			transform: translateY(-20px) translateX(-8px) scale(1.01);
		}
	}

	@keyframes bubble-drift {
		0%, 100% {
			transform: translateY(0) translateX(0) rotate(0deg);
		}
		33% {
			transform: translateY(12px) translateX(-10px) rotate(1deg);
		}
		66% {
			transform: translateY(-10px) translateX(8px) rotate(-1deg);
		}
	}

	@keyframes bubble-pulse {
		0%, 100% {
			transform: scale(1) translateY(0);
		}
		50% {
			transform: scale(1.05) translateY(-5px);
		}
	}

	.bubble-float-1 {
		animation: bubble-float 20s ease-in-out infinite;
	}

	.bubble-float-2 {
		animation: bubble-drift 18s ease-in-out infinite;
		animation-delay: -5s;
	}

	.bubble-float-3 {
		animation: bubble-pulse 15s ease-in-out infinite;
		animation-delay: -10s;
	}
</style>
