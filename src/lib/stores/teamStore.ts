import { writable } from 'svelte/store';
import type { TeamMember } from '$lib/data/team';

// Store for team data
export const teamStore = writable<Record<string, TeamMember>>({});

// Initialize the store with data from server
export function initializeTeamStore(team: Record<string, TeamMember>) {
	teamStore.set(team);
}
