<script lang="ts">
	export let label: string;
	export let amount: string;
</script>

<div class="flex center float-right gap-x-4 bg-circle bg-no-repeat min-h-[6rem] min-w-[16rem]">
	<div class=" font-bold">{label}</div>
	<div class=" font-bold font-mono text-xl">{amount}</div>
</div>
