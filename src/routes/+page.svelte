<script lang="ts">
	import Hero from '$lib/components/homepage/hero.svelte';
	import MeetAuracare from '$lib/components/homepage/meetAuracare/meetAuracare.svelte';
	import HowItWorks from '$lib/components/homepage/howItWorks/howItWorks.svelte';
	import Demo from '$lib/components/homepage/demo/demo.svelte';
	import OurMission from '$lib/components/homepage/ourMission/ourMission.svelte';
	import WhyNow from '$lib/components/homepage/whyNow/whyNow.svelte';
	import Trust from '$lib/components/homepage/trust/trust.svelte';
	import UseCases from '$lib/components/homepage/useCases/useCases.svelte';
	import Roadmap from '$lib/components/homepage/roadmap/roadmap.svelte';
	import GetInTouch from '$lib/components/homepage/getInTouch/getInTouch.svelte';
</script>

<svelte:head>
	<title>Auracare - Faster, smarter triage for primary care providers</title>
</svelte:head>

<Hero />
<MeetAuracare />
<HowItWorks />
<Demo />
<OurMission />
<WhyNow />
<Trust />
<UseCases />
<Roadmap />
<GetInTouch />
