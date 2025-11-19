<script lang="ts">
	import Hero from '$lib/components/homepage/hero.svelte';
	import MeetAuracare from '$lib/components/homepage/meetAuracare/meetAuracare.svelte';
	import HowItWorks from '$lib/components/homepage/howItWorks/howItWorks.svelte';
	import OurMission from '$lib/components/homepage/ourMission/ourMission.svelte';
	import WhyNow from '$lib/components/homepage/whyNow/whyNow.svelte';
	import UseCases from '$lib/components/homepage/useCases/useCases.svelte';
	import Workflow from '$lib/components/homepage/workFlow/workflow.svelte';
	import Roadmap from '$lib/components/homepage/roadmap/roadmap.svelte';
	import GetInTouch from '$lib/components/homepage/getInTouch/getInTouch.svelte';
</script>

<svelte:head>
	<title>Auracare - Faster, Smarter Triage for Primary Care Providers</title>
</svelte:head>

<Hero />
<MeetAuracare />
<HowItWorks />
<OurMission />
<WhyNow />
<Workflow />
<UseCases />
<Roadmap />
<GetInTouch />
