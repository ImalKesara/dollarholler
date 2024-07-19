<script lang="ts">
	import Search from './Icon/Search.svelte';
</script>

<div class="relative flex w-full items-baseline">
	<div class="mr-2 mt-auto text-pastelPurple">
		<Search /><!--icon folder search component-->
	</div>
	<input
		type="text"
		placeholder="Search by keyword"
		class="w-72 border-b-2 border-dashed border-b-pastelPurple bg-transparent font-sansSerif text-xl text-black outline-none focus:border-b-pastelPurple focus:border-solid"
	/>
	<button class="  text-pastelPurple font-black font-sansSerif text-xl">Search</button>
</div>
