import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type ConsentState = 'accepted' | 'rejected' | null;

const STORAGE_KEY = 'cookie_consent';

function createConsentStore() {
	const initial: ConsentState = browser
		? (localStorage.getItem(STORAGE_KEY) as ConsentState)
		: null;

	const { subscribe, set } = writable<ConsentState>(initial);

	return {
		subscribe,
		accept() {
			if (browser) localStorage.setItem(STORAGE_KEY, 'accepted');
			set('accepted');
		},
		reject() {
			if (browser) localStorage.setItem(STORAGE_KEY, 'rejected');
			set('rejected');
		}
	};
}

export const cookieConsent = createConsentStore();
