import { teamList } from '$lib/data/team';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		teamList
	};
};
