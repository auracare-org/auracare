import { team, teamList } from '$lib/data/team';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	return {
		team,
		teamList
	};
};
