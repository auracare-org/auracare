<!-- Animated sine wave background decoration - bottom left corner only -->
<div
	class="absolute bottom-0 left-0 overflow-hidden pointer-events-none opacity-50"
	style="width: 879px; height: 424px; max-width: 100%;"
>
	<svg
		class="absolute w-full h-full"
		viewBox="0 0 879 424"
		preserveAspectRatio="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<!-- Main sine wave path with vertical bobbing -->
		<path
			class="sine-wave-1"
			d="M 0,250 Q 100,180 200,250 T 400,250 T 600,250 T 800,250"
			fill="none"
			stroke="rgba(255, 255, 255, 0.2)"
			stroke-width="2"
		/>
		<path
			class="sine-wave-2"
			d="M 0,270 Q 100,200 200,270 T 400,270 T 600,270 T 800,270"
			fill="none"
			stroke="rgba(255, 255, 255, 0.15)"
			stroke-width="2"
		/>
		<path
			class="sine-wave-3"
			d="M 0,230 Q 100,160 200,230 T 400,230 T 600,230 T 800,230"
			fill="none"
			stroke="rgba(255, 255, 255, 0.1)"
			stroke-width="1.5"
		/>
	</svg>
</div>

<style>
	/* Vertical bobbing animation - like a buoy floating on ocean waves */
	@keyframes wave-bob {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-15px);
		}
	}

	.sine-wave-1 {
		animation: wave-bob 4s ease-in-out infinite;
	}

	.sine-wave-2 {
		animation: wave-bob 4s ease-in-out infinite;
		animation-delay: 0.5s;
	}

	.sine-wave-3 {
		animation: wave-bob 4s ease-in-out infinite;
		animation-delay: 1s;
	}
</style>
