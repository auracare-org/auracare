<script lang="ts">
	const rights = [
		{
			icon: '📋',
			title: 'Right of Access',
			desc: 'Request a copy of all personal data we hold about you (Subject Access Request).'
		},
		{
			icon: '✏️',
			title: 'Right to Rectification',
			desc: 'Ask us to correct any inaccurate or incomplete personal data.'
		},
		{
			icon: '🗑️',
			title: 'Right to Erasure',
			desc: 'Request deletion of your personal data, subject to clinical and legal retention obligations.'
		},
		{
			icon: '🔒',
			title: 'Right to Restriction',
			desc: 'Ask us to stop processing your data while a dispute is resolved.'
		},
		{
			icon: '📦',
			title: 'Right to Portability',
			desc: 'Receive your data in a structured, machine-readable format.'
		},
		{
			icon: '🚫',
			title: 'Right to Object',
			desc: 'Object to processing based on legitimate interests or for direct marketing.'
		}
	];

	const retention = [
		{
			label: 'Consultation records',
			desc: 'retained for a minimum of 8 years from last entry in line with NHS records management guidance'
		},
		{ label: 'Video recordings', desc: 'deleted within 90 days unless required for clinical audit' },
		{ label: 'Financial / billing records', desc: 'retained for 7 years per HMRC requirements' },
		{
			label: 'Account data',
			desc: 'deleted within 30 days of account closure where no retention obligation applies'
		}
	];

	let fullName = $state('');
	let email = $state('');
	let ghpc = $state('');
	let requestType = $state('');
	let details = $state('');
	let submitted = $state(false);

	function handleSubmit(e: Event) {
		e.preventDefault();
		if (!fullName.trim() || !email.trim() || !requestType) return;

		const subject = `Data Request: ${requestType} — ${fullName}`;
		const body = [
			'Hello Auracare Data Team,',
			'',
			'I am submitting a data request under UK GDPR.',
			'',
			`Full name:     ${fullName}`,
			`Email address: ${email}`,
			`GPhC number:   ${ghpc || 'Not provided'}`,
			`Request type:  ${requestType}`,
			'Additional details:',
			details || 'None provided.',
			'',
			'Please confirm receipt and let me know if further verification is needed.',
			'',
			`Thank you,\n${fullName}`
		].join('\n');

		window.location.href =
			`mailto:clinical@auracare.org.uk` +
			`?subject=${encodeURIComponent(subject)}` +
			`&body=${encodeURIComponent(body)}`;

		submitted = true;
	}
</script>

<svelte:head>
	<title>Privacy Centre — Auracare</title>
	<meta
		name="description"
		content="Exercise your UK GDPR data rights — request access, erasure, rectification, or portability of your Auracare data."
	/>
</svelte:head>

<!-- Hero -->
<section class="page-hero" style="padding-top: 9rem; padding-bottom: 4rem;">
	<span
		class="bubble"
		style="--bubble-size: 360px; --bubble-color: rgba(97, 128, 255, 0.2); top: -100px; right: -60px;"
	></span>
	<div class="container">
		<div class="text-center max-w-3xl mx-auto">
			<h1 class="fade-in mb-4" style="color: var(--color-text-header-secondary);">
				Privacy Centre
			</h1>
			<p class="fade-in animation-delay-200 text-xl" style="color: var(--color-text-body-secondary);">
				Your data rights, clearly explained — and easy to exercise.
			</p>
		</div>
	</div>
</section>

<!-- Rights cards -->
<section class="section">
	<div class="container">
		<div class="section-surface">
			<h2 class="fade-in mb-4 text-center" style="color: var(--color-text-header-secondary);">
				Your rights under UK GDPR
			</h2>
			<p
				class="fade-in animation-delay-200 text-center mb-10"
				style="color: var(--color-text-body-secondary);"
			>
				As a user of Auracare's platform you have the following rights over the data we hold. We
				respond to all requests within <strong>30 days</strong>.
			</p>

			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each rights as right, i}
					<div
						class="fade-in"
						style="animation-delay: {i * 60}ms; background: var(--color-bg-surface-default); border: 1px solid var(--color-neutral-200); border-radius: 12px; padding: 24px 20px;"
					>
						<div style="font-size: 1.75rem; margin-bottom: 10px;">{right.icon}</div>
						<h3
							class="text-base font-semibold mb-2"
							style="color: var(--color-text-header-secondary);"
						>
							{right.title}
						</h3>
						<p class="text-sm" style="color: var(--color-text-body-secondary); margin: 0;">
							{right.desc}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Request form -->
<section class="section">
	<div class="container">
		<div class="section-surface max-w-2xl mx-auto">
			<h2 class="fade-in mb-3" style="color: var(--color-text-header-secondary);">
				Submit a data request
			</h2>
			<p class="fade-in animation-delay-200 mb-8" style="color: var(--color-text-body-secondary);">
				Fill in the form and click submit — it will open your email client with a pre-filled message
				to our data team. Just hit send.
			</p>

			<form onsubmit={handleSubmit} novalidate class="fade-in animation-delay-400">
				<div class="form-field">
					<label for="fullName" class="form-label">
						Full name <span class="req">*</span>
					</label>
					<input
						id="fullName"
						type="text"
						class="form-input"
						placeholder="Dr Jane Smith"
						bind:value={fullName}
						required
					/>
				</div>

				<div class="form-field">
					<label for="email" class="form-label">
						Email address <span class="req">*</span>
					</label>
					<input
						id="email"
						type="email"
						class="form-input"
						placeholder="jane.smith@pharmacy.nhs.uk"
						bind:value={email}
						required
					/>
					<p class="form-hint">Use the address registered on your Auracare account.</p>
				</div>

				<div class="form-field">
					<label for="ghpc" class="form-label">GPhC registration number</label>
					<input
						id="ghpc"
						type="text"
						class="form-input"
						placeholder="2012345"
						maxlength="7"
						bind:value={ghpc}
					/>
					<p class="form-hint">Providing this helps us verify your identity faster.</p>
				</div>

				<div class="form-field">
					<label for="requestType" class="form-label">
						Type of request <span class="req">*</span>
					</label>
					<select id="requestType" class="form-input" bind:value={requestType} required>
						<option value="" disabled>Select a request type…</option>
						<option value="Erasure (Right to be Forgotten)">Erasure — delete my data</option>
						<option value="Subject Access Request (Right of Access)">
							Subject Access Request — send me my data
						</option>
						<option value="Rectification">Rectification — correct my data</option>
						<option value="Restriction of Processing">Restriction — stop processing my data</option>
						<option value="Data Portability">Portability — export my data</option>
						<option value="Objection to Processing">Object to processing</option>
						<option value="Other">Other</option>
					</select>
				</div>

				<div class="form-field">
					<label for="details" class="form-label">Additional details</label>
					<textarea
						id="details"
						class="form-input"
						style="min-height: 110px; resize: vertical;"
						placeholder="Describe what data you'd like us to action, or any other relevant context…"
						bind:value={details}
					></textarea>
				</div>

				<button type="submit" class="submit-btn">Submit request via email</button>
				<p class="form-hint text-center" style="margin-top: 8px;">
					Clicking submit will open your default email client with this request pre-filled.
				</p>

				{#if submitted}
					<div class="success-banner">
						✅ Your email client should have opened with the request pre-filled — just hit send. If
						nothing opened, email
						<a href="mailto:clinical@auracare.org.uk" style="color: #166534; font-weight: 600;">
							clinical@auracare.org.uk
						</a> directly.
					</div>
				{/if}
			</form>
		</div>
	</div>
</section>

<!-- Retention limits -->
<section class="section">
	<div class="container">
		<div class="section-surface max-w-2xl mx-auto">
			<h2 class="fade-in mb-4" style="color: var(--color-text-header-secondary);">
				Retention &amp; deletion limits
			</h2>
			<p class="fade-in animation-delay-200 mb-6" style="color: var(--color-text-body-secondary);">
				Some data cannot be immediately deleted under UK law and NHS records management guidance:
			</p>
			<ul class="fade-in animation-delay-400" style="list-style: none; padding: 0;">
				{#each retention as item}
					<li class="retention-item">
						<span class="dot"></span>
						<span style="color: var(--color-text-body-secondary);">
							<strong style="color: var(--color-text-header-secondary);">{item.label}</strong>
							— {item.desc}
						</span>
					</li>
				{/each}
			</ul>
			<p
				class="fade-in animation-delay-600 text-sm"
				style="color: var(--color-text-body-secondary); margin-top: 20px;"
			>
				Where we cannot fulfil a deletion request in full, we will tell you which data is retained,
				the legal basis, and the earliest date it can be deleted.
			</p>
		</div>
	</div>
</section>

<!-- ICO + Contact -->
<section class="section">
	<div class="container">
		<div class="section-surface max-w-2xl mx-auto">
			<h2 class="fade-in mb-4" style="color: var(--color-text-header-secondary);">
				Lodge a complaint
			</h2>
			<p class="fade-in animation-delay-200 mb-4" style="color: var(--color-text-body-secondary);">
				If you are unhappy with how we have handled your request, you can contact the
				<strong>Information Commissioner's Office (ICO)</strong>:
			</p>
			<ul
				class="fade-in animation-delay-400 mb-10"
				style="list-style: none; padding: 0; color: var(--color-text-body-secondary);"
			>
				<li style="margin-bottom: 6px;">
					🌐
					<a
						href="https://ico.org.uk/make-a-complaint/"
						target="_blank"
						rel="noopener"
						style="color: var(--color-text-header-primary);">ico.org.uk/make-a-complaint</a
					>
				</li>
				<li>📞 0303 123 1113</li>
			</ul>

			<h2 class="fade-in mb-4" style="color: var(--color-text-header-secondary);">Contact us</h2>
			<p class="fade-in animation-delay-200" style="color: var(--color-text-body-secondary);">
				Auracare Health Ltd<br />
				Email:
				<a href="mailto:clinical@auracare.org.uk" style="color: var(--color-text-header-primary);">
					clinical@auracare.org.uk
				</a>
			</p>
		</div>
	</div>
</section>

<style>
	.form-field {
		margin-bottom: 20px;
	}
	.form-label {
		display: block;
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-text-header-secondary);
		margin-bottom: 6px;
	}
	.req {
		color: #e53e3e;
	}
	.form-input {
		width: 100%;
		padding: 10px 14px;
		border: 1px solid var(--color-neutral-300);
		border-radius: 8px;
		font-size: 0.95rem;
		font-family: inherit;
		color: var(--color-text-body-primary);
		background: var(--color-bg-surface-default);
		outline: none;
		transition:
			border-color 0.15s,
			box-shadow 0.15s;
	}
	.form-input:focus {
		border-color: var(--color-primary-600);
		box-shadow: 0 0 0 3px rgba(47, 78, 192, 0.12);
		background: var(--color-bg-surface-raised);
	}
	.form-hint {
		font-size: 0.8rem;
		color: var(--color-text-body-secondary);
		margin-top: 4px;
	}
	.submit-btn {
		width: 100%;
		padding: 0.875rem 2rem;
		background: var(--color-bg-button-primary-default);
		color: white;
		border: none;
		border-radius: 8px;
		font-weight: 600;
		font-size: 1rem;
		font-family: inherit;
		cursor: pointer;
		box-shadow: 0 4px 12px rgba(47, 78, 192, 0.3);
		transition: background 0.15s;
	}
	.submit-btn:hover {
		background: var(--color-bg-button-primary-hover);
	}
	.success-banner {
		margin-top: 16px;
		background: #f0fdf4;
		border: 1px solid #86efac;
		border-radius: 8px;
		padding: 16px;
		color: #166534;
		font-size: 0.9rem;
	}
	.retention-item {
		display: flex;
		gap: 12px;
		align-items: flex-start;
		margin-bottom: 12px;
	}
	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--color-bg-button-primary-default);
		margin-top: 8px;
		flex-shrink: 0;
	}
</style>
