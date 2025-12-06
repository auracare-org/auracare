import { departments } from '$lib/data/departments';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		departments
	};
};
