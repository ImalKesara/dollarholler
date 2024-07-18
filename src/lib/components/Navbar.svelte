<script lang="ts">
	import { page } from '$app/stores';
	import Close from './Icon/Close.svelte';
	import Hamburger from './Icon/Hamburger.svelte';

	let isNavshowing: boolean = false;

	function toggleNavbar() {
		isNavshowing = !isNavshowing;
	}
</script>

<svelte:head>
	{#if isNavshowing}
		<style lang="postcss">
			body {
				@apply overflow-hidden md:overflow-auto;
			}
		</style>
	{/if}
</svelte:head>

<button
	class=" fixed right-6 top-6 z-navBarToggle md:hidden"
	on:click={toggleNavbar}
	class:text-goldenFizz={isNavshowing}
	class:text-daisyBush={!isNavshowing}
>
	{#if isNavshowing}
		<Close width={32} height={32} />
	{:else}
		<Hamburger width={32} />
	{/if}
</button>

<header
	class=" z-navBar fixed md:relative md:col-span-3 transition-transform duration-300 -translate-x-full md:translate-x-0 bg-daisyBush text-center w-full h-screen md:h-full"
	class:translate-x-0={isNavshowing}
>
	<div class="mt-10 mb-10 md:mb-24">
		<a href="/invoices"
			><img src="/images/logo.svg" alt="the dollar hollar logo" class=" mx-auto" /></a
		>
	</div>

	<nav>
		<ul class="list-none text-2xl font-bold">
			<li><a href="/invoices" class:active={$page.url.pathname === '/invoices'}>Invoices</a></li>
			<li><a href="/clients" class:active={$page.url.pathname === '/clients'}>Clients</a></li>
			<li><a href="#" class:active={$page.url.pathname === '#'}>Settings</a></li>
			<li><a href="#">Logout</a></li>
		</ul>
	</nav>
</header>

<style lang="postcss">
	nav ul li {
		@apply mb-6;
	}

	nav ul li a {
		@apply font-bold text-white hover:text-goldenFizz;
	}

	nav ul li a.active {
		@apply text-robinEggBlue px-8 transition-[padding] duration-300;
		background:
			url('/images/active-nav--left.svg') left no-repeat,
			url('/images/active-nav--right.svg') right no-repeat;
	}
	nav ul li a.active:hover {
		@apply px-9;
	}
</style>
