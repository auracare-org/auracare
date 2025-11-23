<script lang="ts">
	const title = 'Get in touch';
	const subtitle =
		'Interested in a free demo of Auracare, partnering with us on research, or joining our mission? We\'d love to talk!';
	const contactEmail = 'hinlun@auracare.org.uk';

	let name = $state('');
	let email = $state('');
	let organization = $state('');
	let message = $state('');

	function handleRequestDemo(event: Event) {
		event.preventDefault();

		const subject = `Demo Request from ${name}`;
		const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AOrganization: ${organization}%0D%0A%0D%0AMessage:%0D%0A${message}`;

		const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
		window.location.href = mailtoUrl;
	}

	function handleWorkWithUs() {
		const subject = `Work With Us - ${name}`;
		const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AOrganization: ${organization}%0D%0A%0D%0AMessage:%0D%0A${message}`;

		const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
		window.location.href = mailtoUrl;
	}
</script>

<section id="contact" class="contact-section">
	<div class="contact-header-container">
		<div class="contact-header">
			<p class="contact-title">{title}</p>
		</div>
		<div class="contact-subtitle-wrapper">
			<p class="contact-subtitle">{subtitle}</p>
		</div>
	</div>

	<form class="contact-form" onsubmit={handleRequestDemo}>
		<!-- Name and Email row -->
		<div class="form-row-grid">
			<div class="form-field">
				<div class="form-label-wrapper">
					<p class="form-label">Name*</p>
				</div>
				<div class="form-input-wrapper">
					<input
						type="text"
						bind:value={name}
						required
						class="form-input"
					/>
				</div>
			</div>
			<div class="form-field">
				<div class="form-label-wrapper">
					<p class="form-label">Email*</p>
				</div>
				<div class="form-input-wrapper">
					<input
						type="email"
						bind:value={email}
						required
						class="form-input"
					/>
				</div>
			</div>
		</div>

		<!-- Organization -->
		<div class="form-field-full">
			<div class="form-label-wrapper">
				<p class="form-label">Organization</p>
			</div>
			<div class="form-input-wrapper">
				<input
					type="text"
					bind:value={organization}
					class="form-input"
				/>
			</div>
		</div>

		<!-- Message -->
		<div class="form-field-full">
			<div class="form-label-wrapper">
				<p class="form-label">Message*</p>
			</div>
			<div class="form-textarea-wrapper">
				<textarea
					bind:value={message}
					required
					class="form-textarea"
				></textarea>
			</div>
		</div>

		<!-- Buttons -->
		<div class="form-buttons">
			<button type="submit" class="form-btn form-btn-primary">
				<div class="btn-wrap">
					<p class="btn-text">Request a demo</p>
				</div>
			</button>
			<button type="button" class="form-btn form-btn-secondary" onclick={handleWorkWithUs}>
				<div class="btn-wrap">
					<p class="btn-text">Work with us</p>
				</div>
			</button>
		</div>
	</form>

	<p class="form-required">*required</p>
</section>

<style>
	.contact-section {
		background: white;
		width: 100%;
		position: relative;
		padding: 120px 0;
		min-height: 800px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.contact-header-container {
		position: absolute;
		height: 120px;
		left: 50%;
		transform: translateX(-50%);
		top: 80px;
		width: 1216px;
	}

	.contact-header {
		position: absolute;
		height: 48px;
		left: 0;
		top: 0;
		width: 1216px;
	}

	.contact-title {
		position: absolute;
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
		font-size: 48px;
		line-height: 48px;
		color: var(--color-text-header-primary);
		text-align: center;
		white-space: nowrap;
		left: 50%;
		top: 2px;
		transform: translateX(-50%);
		margin: 0;
	}

	.contact-subtitle-wrapper {
		position: absolute;
		height: 56px;
		left: 272px;
		top: 64px;
		width: 672px;
	}

	.contact-subtitle {
		position: absolute;
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
		font-size: 18px;
		line-height: 28px;
		color: #343a40;
		text-align: center;
		left: 50%;
		top: 1px;
		transform: translateX(-50%);
		width: 650px;
		margin: 0;
	}

	.contact-form {
		position: absolute;
		display: flex;
		flex-direction: column;
		gap: 24px;
		height: 314px;
		align-items: flex-start;
		left: 50%;
		transform: translateX(-50%);
		top: 264px;
		width: 672px;
	}

	.form-row-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0px, 1fr));
		grid-template-rows: repeat(1, minmax(0px, 1fr));
		gap: 24px;
		height: 58px;
		width: 100%;
	}

	.form-field {
		display: flex;
		flex-direction: column;
		gap: 8px;
		align-items: flex-start;
	}

	.form-field-full {
		display: flex;
		flex-direction: column;
		gap: 8px;
		align-items: flex-start;
		width: 100%;
	}

	.form-label-wrapper {
		display: flex;
		gap: 8px;
		height: 14px;
		align-items: center;
		width: 100%;
	}

	.form-label {
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 14px;
		line-height: 14px;
		color: #0a0a0a;
		white-space: nowrap;
		margin: 0;
	}

	.form-input-wrapper {
		background: #f3f3f5;
		border: 1px solid transparent;
		height: 45px;
		border-radius: 8px;
		width: 100%;
	}

	.form-input {
		width: 100%;
		height: 100%;
		background: transparent;
		border: none;
		border-radius: 8px;
		padding: 0 12px;
		font-family: 'Poppins', sans-serif;
		font-size: 14px;
		color: #0a0a0a;
		box-sizing: border-box;
	}

	.form-input:focus {
		outline: 2px solid var(--color-border-focus);
		outline-offset: 0;
	}

	.form-textarea-wrapper {
		background: #f3f3f5;
		border: 1px solid transparent;
		height: 64px;
		border-radius: 8px;
		width: 100%;
	}

	.form-textarea {
		width: 100%;
		height: 100%;
		background: transparent;
		border: none;
		border-radius: 8px;
		padding: 12px;
		font-family: 'Poppins', sans-serif;
		font-size: 14px;
		color: #0a0a0a;
		resize: none;
		box-sizing: border-box;
	}

	.form-textarea:focus {
		outline: 2px solid var(--color-border-focus);
		outline-offset: 0;
	}

	.form-buttons {
		display: flex;
		gap: 16px;
		height: 40px;
		align-items: flex-start;
		width: 100%;
	}

	.form-btn {
		flex: 1 1 0%;
		min-width: 80px;
		background-clip: padding-box;
		border: 0px solid transparent;
		box-sizing: border-box;
		display: flex;
		gap: 4px;
		align-items: center;
		justify-content: center;
		overflow: clip;
		padding: 8px 12px;
		border-radius: 6px;
		cursor: pointer;
		transition: all 0.2s ease;
		height: 40px;
	}

	.form-btn-primary {
		background: var(--color-bg-button-primary-default);
	}

	.form-btn-primary:hover {
		background: #2642a8;
		transform: translateY(-1px);
	}

	.form-btn-secondary {
		background: #d5dcf2;
	}

	.form-btn-secondary:hover {
		background: #c5ccf0;
		transform: translateY(-1px);
	}

	.btn-wrap {
		box-sizing: border-box;
		display: flex;
		gap: 0px;
		align-items: flex-start;
		padding: 0px 4px;
	}

	.btn-text {
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		white-space: nowrap;
		margin: 0;
	}

	.form-btn-primary .btn-text {
		color: #ffffff;
	}

	.form-btn-secondary .btn-text {
		color: var(--color-text-header-primary);
	}

	.form-required {
		position: absolute;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 14px;
		line-height: 14px;
		color: #000000;
		white-space: nowrap;
		right: calc(50% - 336px);
		top: 597.5px;
		margin: 0;
	}

	/* Responsive */
	@media (max-width: 1400px) {
		.contact-section {
			padding: 80px 24px;
			min-height: 750px;
		}

		.contact-header-container {
			position: static;
			width: 100%;
			height: auto;
			margin-bottom: 64px;
		}

		.contact-header {
			position: static;
			width: 100%;
			height: auto;
			margin-bottom: 16px;
		}

		.contact-title {
			position: static;
			transform: none;
		}

		.contact-subtitle-wrapper {
			position: static;
			width: 100%;
			height: auto;
		}

		.contact-subtitle {
			position: static;
			transform: none;
			width: 100%;
			max-width: 650px;
			margin: 0 auto;
		}

		.contact-form {
			position: static;
			width: 100%;
			max-width: 672px;
			margin: 0 auto;
			height: auto;
		}

		.form-required {
			position: static;
			text-align: right;
			max-width: 672px;
			margin: 16px auto 0;
		}
	}

	@media (max-width: 768px) {
		.contact-section {
			padding: 60px 24px;
			min-height: auto;
		}

		.contact-title {
			font-size: 36px;
			line-height: 40px;
		}

		.contact-subtitle {
			font-size: 16px;
			line-height: 24px;
		}

		.form-row-grid {
			grid-template-columns: 1fr;
			height: auto;
			gap: 24px;
		}

		.form-buttons {
			flex-direction: column;
			height: auto;
		}

		.form-btn {
			width: 100%;
		}
	}
</style>
