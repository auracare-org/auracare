import { writable } from 'svelte/store';

export const activePersonId = writable<string | null>(null);

export function openPersonModal(memberId: string) {
	activePersonId.set(memberId);
}

export function closePersonModal() {
	activePersonId.set(null);
}
