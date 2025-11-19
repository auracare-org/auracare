<script lang="ts">
	const headlineWhite = 'Faster, smarter triage for';
	const headlineBlue = 'primary care providers';
	const subline =
		'Auracare builds the hardware and software that makes primary care triage more accurate, explainable, and efficient.';
	const buttonSec = 'Learn More';
	const buttonSecLink = '#howitworks';
	const buttonPri = 'View Product';
	const buttonPriLink = 'https://pathways.auracarehealth.com/';
</script>

<section class="hero-section" style="background: #fafafa;">
	<div class="container py-20 md:py-32">
		<div class="text-center slide-in-up">
			<h1 class="mx-auto mb-8" style="line-height: 1.1; font-weight: 700; max-width: 95%;">
				<span
					class="block"
					style="color: #1f2937; font-weight: 700; font-size: clamp(3rem, 8vw, 7rem);"
					>{headlineWhite}</span
				>
				<span
					class="block"
					style="color: #4f6fed; font-weight: 700; font-size: clamp(3rem, 8vw, 7rem);"
					>{headlineBlue}</span
				>
			</h1>

			<p class="text-lg md:text-xl max-w-3xl mx-auto mb-8" style="color: #6c757d;">
				{subline}
			</p>

			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				<a
					href={buttonPriLink}
					class="btn btn-lg"
					style="background: #4f6fed; color: white; border-radius: 8px; font-weight: 600; padding: 0.875rem 2rem;"
					>{buttonPri}</a
				>
				<a
					href={buttonSecLink}
					class="btn btn-lg"
					style="background: #e0e7ff; color: #4f6fed; border-radius: 8px; font-weight: 600; padding: 0.875rem 2rem;"
					>{buttonSec}</a
				>
			</div>
		</div>
	</div>
</section>
