<script lang="ts">
	export let label: 'draft' | 'late' | 'current' | 'sent' | 'paid' | 'archive' = 'draft';
</script>

<div
	class="inverted text-md w-20 rounded-full text-center font-bold capitalize text-pastelPurple border-pastelPurple border-1"
	class:inverted={label === 'draft'}
	class:alert={label === 'late'}
	class:success={label === 'sent' || label === 'current'}
	class:archive={label === 'paid' || label === 'archive'}
>
	{label}
</div>

<style lang="postcss">
	.inverted {
		@apply border-pastelPurple text-pastelPurple;
	}
	.success {
		@apply border-robinEggBlue bg-robinEggBlue text-blueGem;
	}
	.alert {
		@apply border-scarlet bg-scarlet text-goldenFizz;
	}
	.archive {
		@apply border-pastelPurple bg-pastelPurple text-white;
	}
</style>
