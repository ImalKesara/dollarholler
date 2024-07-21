<script lang="ts">
	type Label = string;
	type Amount = string;

	export let label: Label;
	export let amount: Amount;
</script>

<div class="flex center float-right gap-x-4 bg-circle bg-no-repeat min-h-[6rem] min-w-[16rem]">
	<div class=" font-bold">{label}</div>
	<div class=" font-bold font-mono text-xl">{amount}</div>
</div>
