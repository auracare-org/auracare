<!-- Animated sine wave background decoration - bottom left corner only -->
<div
	class="absolute bottom-0 left-0 overflow-hidden pointer-events-none"
	style="width: 60%; height: 50%; z-index: 1; opacity: 0.5;"
>
	<svg
		class="absolute w-full h-full"
		viewBox="0 0 800 300"
		preserveAspectRatio="xMinYMax meet"
		xmlns="http://www.w3.org/2000/svg"
	>
		<!-- Define gradients for more interesting wave colors -->
		<defs>
			<linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
				<stop offset="0%" style="stop-color:rgba(255, 255, 255, 0.15);stop-opacity:1" />
				<stop offset="100%" style="stop-color:rgba(255, 255, 255, 0.05);stop-opacity:1" />
			</linearGradient>
			<linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
				<stop offset="0%" style="stop-color:rgba(255, 255, 255, 0.1);stop-opacity:1" />
				<stop offset="100%" style="stop-color:rgba(255, 255, 255, 0.02);stop-opacity:1" />
			</linearGradient>
			<linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
				<stop offset="0%" style="stop-color:rgba(255, 255, 255, 0.08);stop-opacity:1" />
				<stop offset="100%" style="stop-color:rgba(255, 255, 255, 0.01);stop-opacity:1" />
			</linearGradient>
		</defs>

		<!-- Background waves with staggered animations -->
		<path
			class="sine-wave-3"
			d="M 0,250 Q 100,220 200,250 T 400,250 T 600,250 T 800,250"
			fill="none"
			stroke="url(#waveGradient3)"
			stroke-width="2"
		/>
		<path
			class="sine-wave-2"
			d="M 0,230 Q 120,190 240,230 T 480,230 T 720,230"
			fill="none"
			stroke="url(#waveGradient2)"
			stroke-width="2.5"
		/>
		<path
			class="sine-wave-1"
			d="M 0,210 Q 140,170 280,210 T 560,210 T 800,210"
			fill="none"
			stroke="url(#waveGradient1)"
			stroke-width="3"
		/>
	</svg>
</div>

<style>
	/* Gentle horizontal flow animation */
	@keyframes wave-flow-1 {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-200px);
		}
	}

	@keyframes wave-flow-2 {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-240px);
		}
	}

	@keyframes wave-flow-3 {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-280px);
		}
	}

	.sine-wave-1 {
		animation: wave-flow-1 12s linear infinite;
	}

	.sine-wave-2 {
		animation: wave-flow-2 15s linear infinite;
		animation-delay: 0.5s;
	}

	.sine-wave-3 {
		animation: wave-flow-3 18s linear infinite;
		animation-delay: 1s;
	}
</style>