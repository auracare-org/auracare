<script lang="ts">
	const title = 'Get in touch';
	const subtitle =
		"Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.";
	const contactEmail = 'hinlun@auracare.org.uk';

	let name = $state('');
	let email = $state('');
	let message = $state('');

	function handleSubmit(event: Event) {
		event.preventDefault();

		const subject = `Contact Form: Message from ${name}`;
		const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

		window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
	}
</script>

<section id="contact" class="section">
	<div class="container">
		<div class="max-w-2xl mx-auto">
			<div class="text-center mb-12 slide-in-up">
				<h2
					class="text-4xl md:text-5xl font-bold mb-4"
					style="color: var(--color-text-header-primary);"
				>
					{title}
				</h2>
				<p class="text-lg" style="color: var(--color-text-body-secondary);">
					{subtitle}
				</p>
			</div>

			<form class="card p-8 slide-in-up" onsubmit={handleSubmit}>
				<div class="space-y-6">
					<div>
						<label
							for="name"
							class="block text-sm font-semibold mb-2"
							style="color: var(--color-text-header-secondary);"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							bind:value={name}
							required
							class="w-full px-4 py-3 rounded-lg border"
							style="border-color: var(--color-neutral-300);"
							placeholder="Your name"
						/>
					</div>

					<div>
						<label
							for="email"
							class="block text-sm font-semibold mb-2"
							style="color: var(--color-text-header-secondary);"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							bind:value={email}
							required
							class="w-full px-4 py-3 rounded-lg border"
							style="border-color: var(--color-neutral-300);"
							placeholder="your.email@example.com"
						/>
					</div>

					<div>
						<label
							for="message"
							class="block text-sm font-semibold mb-2"
							style="color: var(--color-text-header-secondary);"
						>
							Message
						</label>
						<textarea
							id="message"
							bind:value={message}
							required
							rows="6"
							class="w-full px-4 py-3 rounded-lg border resize-none"
							style="border-color: var(--color-neutral-300);"
							placeholder="Tell us about your inquiry..."
						></textarea>
					</div>

					<button type="submit" class="btn btn-primary btn-lg w-full"> Send Message </button>
				</div>
			</form>
		</div>
	</div>
</section>
