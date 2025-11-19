<!-- Animated sine wave background decoration - bottom left corner only -->
<div
	class="absolute bottom-0 left-0 overflow-hidden pointer-events-none"
	style="width: 100%; height: 100%; z-index: 1; opacity: 0.7;"
>
	<svg
		class="absolute w-full h-full"
		viewBox="0 0 879 424"
		preserveAspectRatio="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<!-- Define gradients for more interesting wave colors -->
		<defs>
			<linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
				<stop offset="0%" style="stop-color:rgba(255, 255, 255, 0.6);stop-opacity:1" />
				<stop offset="50%" style="stop-color:rgba(200, 220, 255, 0.7);stop-opacity:1" />
				<stop offset="100%" style="stop-color:rgba(255, 255, 255, 0.5);stop-opacity:1" />
			</linearGradient>
			<linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
				<stop offset="0%" style="stop-color:rgba(255, 255, 255, 0.4);stop-opacity:1" />
				<stop offset="50%" style="stop-color:rgba(180, 200, 255, 0.5);stop-opacity:1" />
				<stop offset="100%" style="stop-color:rgba(255, 255, 255, 0.3);stop-opacity:1" />
			</linearGradient>

			<!-- Glowing dot filter -->
			<filter id="glow">
				<feGaussianBlur stdDeviation="6" result="coloredBlur"/>
				<feMerge>
					<feMergeNode in="coloredBlur"/>
					<feMergeNode in="SourceGraphic"/>
				</feMerge>
			</filter>
		</defs>

		<!-- Background waves with gradient strokes -->
		<path
			class="sine-wave-3"
			d="M 0,230 Q 100,160 200,230 T 400,230 T 600,230 T 800,230"
			fill="none"
			stroke="rgba(255, 255, 255, 0.3)"
			stroke-width="2"
		/>
		<path
			class="sine-wave-2"
			d="M 0,270 Q 100,200 200,270 T 400,270 T 600,270 T 800,270"
			fill="none"
			stroke="url(#waveGradient2)"
			stroke-width="3"
		/>

		<!-- Main wave path (for the dot to follow) -->
		<path
			id="mainWavePath"
			class="sine-wave-1"
			d="M 0,250 Q 100,180 200,250 T 400,250 T 600,250 T 800,250"
			fill="none"
			stroke="url(#waveGradient1)"
			stroke-width="4"
		/>

		<!-- Pulsing circular border for main dot -->
		<circle class="pulse-ring" r="20" fill="none" stroke="rgba(255, 255, 255, 0.6)" stroke-width="2">
			<animateMotion
				dur="8s"
				repeatCount="indefinite"
				path="M 0,250 Q 100,180 200,250 T 400,250 T 600,250 T 800,250"
			/>
		</circle>

		<!-- Main dot -->
		<circle class="wave-dot" r="8" fill="white" filter="url(#glow)">
			<animateMotion
				dur="8s"
				repeatCount="indefinite"
				path="M 0,250 Q 100,180 200,250 T 400,250 T 600,250 T 800,250"
			/>
		</circle>

		<!-- Pulsing circular border for secondary dot -->
		<circle class="pulse-ring-2" r="16" fill="none" stroke="rgba(200, 220, 255, 0.5)" stroke-width="2">
			<animateMotion
				dur="6s"
				repeatCount="indefinite"
				path="M 0,270 Q 100,200 200,270 T 400,270 T 600,270 T 800,270"
			/>
		</circle>

		<!-- Secondary dot -->
		<circle class="wave-dot-2" r="6" fill="rgba(200, 220, 255, 0.9)" filter="url(#glow)">
			<animateMotion
				dur="6s"
				repeatCount="indefinite"
				path="M 0,270 Q 100,200 200,270 T 400,270 T 600,270 T 800,270"
			/>
		</circle>
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

	/* Pulsing glow animation for the dot */
	@keyframes pulse-glow {
		0%,
		100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.7;
			transform: scale(1.3);
		}
	}

	/* Pulsing ring animation - expands and fades */
	@keyframes pulse-ring {
		0% {
			r: 12;
			opacity: 0.8;
		}
		100% {
			r: 28;
			opacity: 0;
		}
	}

	@keyframes pulse-ring-2 {
		0% {
			r: 10;
			opacity: 0.7;
		}
		100% {
			r: 24;
			opacity: 0;
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

	.wave-dot {
		animation: pulse-glow 2s ease-in-out infinite;
	}

	.wave-dot-2 {
		animation: pulse-glow 1.5s ease-in-out infinite;
		animation-delay: 0.3s;
	}

	.pulse-ring {
		animation: pulse-ring 2s ease-out infinite;
	}

	.pulse-ring-2 {
		animation: pulse-ring-2 1.8s ease-out infinite;
		animation-delay: 0.2s;
	}
</style>
