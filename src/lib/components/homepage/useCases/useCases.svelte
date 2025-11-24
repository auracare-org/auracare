<script lang="ts">
	import {
		IconChevronDown,
		IconPill,
		IconStethoscope,
		IconSchool,
		IconAmbulance
	} from '@tabler/icons-svelte';
	import { slide } from 'svelte/transition';
	import list from './text.json';

	const title = 'Use cases';
	const subTitle = "Auracare's triage system can be applied in any community care setting.";

	let openIndex = $state<number>(0);

	function toggle(index: number) {
		openIndex = openIndex === index ? -1 : index;
	}

	const iconMap = {
		IconPill,
		IconStethoscope,
		IconSchool,
		IconAmbulance
	};
</script>

<section class="section use-cases-section">
	<div class="container">
		<div class="grid md:grid-cols-12 gap-8 items-start">
			<!-- Left Column: Title & Description -->
			<div class="md:col-span-4 slide-in-up">
				<h2 class="text-4xl md:text-5xl font-bold mb-4 text-white">
					{title}
				</h2>
				<p class="text-xl text-white opacity-80">
					{subTitle}
				</p>
			</div>

			<!-- Right Column: Accordion Items -->
			<div class="md:col-span-8 space-y-4">
				{#each list as item, index}
					{@const IconComponent = iconMap[item.icon as keyof typeof iconMap]}
					<div class="use-case-glass-card">
						<button
							class="use-case-trigger w-full text-left p-6 flex items-center gap-4"
							onclick={() => toggle(index)}
							aria-expanded={openIndex === index}
						>
							<div class="use-case-icon">
								<IconComponent size={24} stroke={2} />
							</div>
							<div class="flex-1">
								<h3 class="text-xl font-bold mb-1 text-white">
									{item.title}
								</h3>
								<p class="text-base text-white opacity-80">
									{item.subtitle}
								</p>
							</div>
							<IconChevronDown
								size={24}
								class="flex-shrink-0 transition-transform duration-200 text-white"
								style="transform: rotate({openIndex === index ? 180 : 0}deg);"
							/>
						</button>

						{#if openIndex === index}
							<div class="px-6 pb-6 pt-2 use-case-content" transition:slide={{ duration: 300 }}>
								<p class="mb-4 text-white font-medium">
									{item.text}
								</p>
								<ul class="space-y-3">
									{#each item.list as listItem}
										<li class="flex items-start gap-3">
											<span class="text-white opacity-60">•</span>
											<span class="text-white opacity-90">{listItem}</span>
										</li>
									{/each}
								</ul>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.use-cases-section {
		position: relative;
		background: var(--color-bg-button-primary-default);
		background-image:
			linear-gradient(180deg, rgba(15, 30, 80, 0.4) 0%, rgba(42, 75, 200, 0) 70%),
			linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-primary-700) 100%);
		color: white;
		width: 100vw;
		left: 50%;
		right: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
		overflow: hidden;
	}

	.use-cases-section::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: 
			linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
		background-size: 50px 50px;
		pointer-events: none;
		z-index: 1;
	}

	.use-cases-section > .container {
		position: relative;
		z-index: 2;
	}

	.use-case-glass-card {
		background: var(--color-white-alpha-10);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-radius: var(--radius-md);
		border: 1px solid var(--color-white-alpha-20);
		transition: all 0.3s ease;
		box-shadow: var(--shadow-glass-glow);
		overflow: hidden;
	}

	.use-case-glass-card:hover {
		background: var(--color-white-alpha-15);
		box-shadow: var(--shadow-glass-glow-strong);
	}

	.use-case-icon {
		background: var(--color-white-alpha-20);
		border-radius: 12px;
		padding: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		flex-shrink: 0;
		box-shadow: var(--shadow-glass-glow);
	}

	.use-case-trigger {
		background: transparent;
		border: none;
		cursor: pointer;
		outline: none;
	}

	.use-case-trigger:focus-visible {
		outline: 2px solid rgba(255, 255, 255, 0.5);
		outline-offset: 2px;
		border-radius: var(--radius-md);
	}

	.use-case-content {
		font-size: 1.125rem;
		line-height: 1.75;
	}

	.use-case-content p {
		font-size: 1.125rem;
	}

	.use-case-content li span {
		font-size: 1.125rem;
	}
</style>
