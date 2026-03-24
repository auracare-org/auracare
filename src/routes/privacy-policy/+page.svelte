<svelte:head>
	<title>Privacy Policy — Auracare</title>
	<meta
		name="description"
		content="Privacy Policy for the Auracare Clinical Platform — how we collect, use, and protect your data."
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
			<h1 class="fade-in mb-4" style="color: var(--color-text-header-secondary);">Privacy Policy</h1>
			<p class="fade-in animation-delay-200" style="color: var(--color-text-body-secondary);">
				Auracare Clinical Platform · Last updated: 17 March 2026
			</p>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="section-surface max-w-3xl mx-auto">

			<!-- Pre-release banner -->
			<div class="prerelease-banner fade-in mb-10">
				<span class="prerelease-badge">Pre-release</span>
				<p>
					Auracare is currently in pre-release. This privacy policy is provided for transparency and
					to support app store review processes. It is subject to change before general availability.
					Material updates will be communicated via the app or by email.
				</p>
			</div>

			<div class="policy-body">

				<h2>1. Who We Are</h2>
				<p>
					Auracare Clinical Platform ("Auracare", "we", "us") is operated by Auracare Health Ltd, a
					company registered in England and Wales. Auracare is a clinical decision-support platform
					designed exclusively for registered pharmacists practising in the United Kingdom.
				</p>
				<p>Contact: <a href="mailto:clinical@auracare.org.uk">clinical@auracare.org.uk</a></p>

				<h2>2. Scope of This Policy</h2>
				<p>
					This policy explains how we collect, use, store, and protect data when you use the Auracare
					mobile application (Android / iOS), desktop application, or web platform (collectively "the
					App").
				</p>

				<h2>3. Data We Collect</h2>

				<p><strong>Pharmacist account data</strong></p>
				<ul>
					<li>Full name, email address, and password (hashed)</li>
					<li>GPhC registration number and professional status</li>
					<li>Pharmacy name and contact details</li>
				</ul>

				<p><strong>Patient consultation data</strong></p>
				<ul>
					<li>
						Patient demographic information entered during a consultation (name, date of birth, NHS
						number where provided)
					</li>
					<li>Clinical observations, presenting complaints, and assessment scores (e.g. NEWS2)</li>
					<li>Medication history and allergy records entered by the pharmacist</li>
					<li>Consultation outcomes and referral letter content</li>
				</ul>

				<p><strong>Device and usage data</strong></p>
				<ul>
					<li>Device type, operating system version, and app version</li>
					<li>Session timestamps and feature usage (no advertising identifiers)</li>
					<li>
						Camera and microphone data used solely for video consultation recording — recordings are
						stored encrypted and deleted within 90 days unless retained for clinical audit purposes
					</li>
				</ul>

				<h2>4. How We Use Your Data</h2>
				<ul>
					<li>
						To provide clinical decision support, consultation records, and referral letter generation
					</li>
					<li>To maintain your professional account and session history</li>
					<li>
						To transmit referral letters to NHS services or GP practices via Microsoft 365 (Graph
						API) on your instruction
					</li>
					<li>
						To comply with GPhC professional standards and NHS data governance requirements
					</li>
					<li>To improve the platform through aggregated, anonymised analytics</li>
				</ul>
				<p>We do not sell, rent, or share your data with third parties for marketing purposes.</p>

				<h2>5. Legal Basis for Processing</h2>
				<ul>
					<li>
						<strong>Contract</strong> — processing necessary to provide the App under our Terms of Service
					</li>
					<li>
						<strong>Legal obligation</strong> — compliance with NHS DSP Toolkit, GPhC standards, and UK
						GDPR
					</li>
					<li>
						<strong>Legitimate interests</strong> — improving platform safety and clinical accuracy
					</li>
					<li>
						<strong>Explicit consent</strong> — where required for special category health data
					</li>
				</ul>

				<h2>6. Data Storage and Security</h2>
				<p>
					All data is stored on Microsoft Azure infrastructure located in the <strong>UK South</strong>
					region. We apply encryption at rest (AES-256) and in transit (TLS 1.2+). Access is restricted
					to authorised Auracare staff and audited.
				</p>
				<p>
					We maintain an NHS Data Security and Protection Toolkit submission and conduct annual
					penetration testing.
				</p>

				<h2>7. Data Retention</h2>
				<ul>
					<li>
						Consultation records: retained for a minimum of 8 years from last entry in line with NHS
						records management guidance
					</li>
					<li>Video recordings: 90 days unless required for clinical audit</li>
					<li>
						Account data: retained for the duration of your account and deleted within 30 days of
						account closure
					</li>
				</ul>

				<h2>8. Permissions Used by the App</h2>
				<ul>
					<li>
						<strong>Camera</strong> — used for video consultations and clinical image capture; never
						accessed in the background
					</li>
					<li>
						<strong>Microphone</strong> — used for video consultation audio; never accessed in the
						background
					</li>
					<li>
						<strong>Internet</strong> — required to sync consultation data and send referrals
					</li>
					<li>
						<strong>Storage</strong> — used to save PDF referral letters to your device on request
					</li>
				</ul>

				<h2>9. Your Rights Under UK GDPR</h2>
				<p>You have the right to:</p>
				<ul>
					<li>Access a copy of the personal data we hold about you</li>
					<li>Correct inaccurate data</li>
					<li>
						Request deletion ("right to be forgotten"), subject to clinical retention obligations
					</li>
					<li>Restrict or object to processing</li>
					<li>Data portability</li>
					<li>
						Lodge a complaint with the ICO at
						<a href="https://ico.org.uk" target="_blank" rel="noopener">ico.org.uk</a>
					</li>
				</ul>
				<p>
					To exercise any right, visit our
					<a href="/privacy-centre">Privacy Centre</a> or email
					<a href="mailto:clinical@auracare.org.uk">clinical@auracare.org.uk</a>.
				</p>

				<h2>10. Third-Party Services</h2>
				<ul>
					<li>
						<strong>Microsoft Azure</strong> — hosting, storage, AI inference (Azure OpenAI), and speech
						transcription
					</li>
					<li>
						<strong>Microsoft Graph API</strong> — outbound email for referral letters sent from a shared
						Auracare mailbox
					</li>
				</ul>
				<p>
					Each processor operates under a Data Processing Agreement compliant with UK GDPR Article
					28.
				</p>

				<h2>11. Children</h2>
				<p>
					Auracare is intended solely for use by registered pharmacists. The App is not directed at
					children under 18 and we do not knowingly collect data from minors.
				</p>

				<h2>12. Changes to This Policy</h2>
				<p>
					We may update this policy from time to time. Material changes will be notified via the App
					or by email. Continued use of the App after changes constitutes acceptance.
				</p>

				<h2>13. Contact</h2>
				<p>
					Auracare Health Ltd<br />
					Email: <a href="mailto:clinical@auracare.org.uk">clinical@auracare.org.uk</a><br />
					Web: <a href="https://auracare.org.uk">auracare.org.uk</a>
				</p>

			</div>
		</div>
	</div>
</section>

<style>
	.prerelease-banner {
		display: flex;
		align-items: flex-start;
		gap: 12px;
		background: #fffbeb;
		border: 1px solid #fcd34d;
		border-radius: 10px;
		padding: 16px 18px;
		font-size: 0.9rem;
		color: #92400e;
		line-height: 1.6;
	}
	.prerelease-badge {
		flex-shrink: 0;
		background: #f59e0b;
		color: #fff;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		padding: 3px 10px;
		border-radius: 999px;
		margin-top: 2px;
	}
	.prerelease-banner p {
		margin: 0;
	}

	.policy-body h2 {
		font-size: 1.05rem;
		font-weight: 600;
		color: var(--color-text-header-primary);
		margin: 2rem 0 0.5rem;
		padding-bottom: 6px;
		border-bottom: 2px solid var(--color-primary-100);
	}
	.policy-body p,
	.policy-body li {
		color: var(--color-text-body-secondary);
		line-height: 1.75;
		margin-bottom: 0.6rem;
	}
	.policy-body ul {
		padding-left: 22px;
		margin-bottom: 0.6rem;
	}
	.policy-body a {
		color: var(--color-text-header-primary);
	}
</style>
