<script lang="ts">
  import { page } from "$app/state";
  import logo from "$lib/images/logo.svg";
  import github from "$lib/images/github.svg";
  import siteMetadata from "$lib/siteMetadata";
  import headerNavLinks from "$lib/data/headerNavLinks";
  import ThemeSwitch from "./ThemeSwitch.svelte";
  import { writable } from "svelte/store";
  import { onMount } from "svelte";

  let navShow = writable(false);
  let headerClass = "flex items-center w-full justify-between py-10 transition-transform duration-300";
  if (siteMetadata.stickyNav) {
    headerClass += " sticky top-0 z-50";
  }

  const toggleNav = () => {
    navShow.update(n => !n);
  };

  let lastScrollTop = 0;
  const scrollDirection = writable('up');

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop > lastScrollTop) {
      scrollDirection.set('down');
    } else {
      scrollDirection.set('up');
    }
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  };

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<header id="header" class={`${headerClass} ${$scrollDirection === 'down' ? '-translate-y-full' : ''}`}>
	<a href="/" aria-label={siteMetadata.headerTitle}>
	  <div class="flex items-center justify-between">
		<div class="mr-3">
		  <img src={logo} alt="Logo" class="w-10 h-10 dark:invert dark:filter dark:brightness-0 dark:sepia dark:saturate-100 dark:hue-rotate-180 dark:contrast-100 dark:grayscale dark:opacity-100" />
		</div>
		{#if typeof siteMetadata.headerTitle === "string"}
		  <div class="hidden h-6 text-2xl dark:text-zinc-200 dark:ring-white/10 font-semibold sm:block">
			{siteMetadata.headerTitle}
		  </div>
		{:else}
		  {siteMetadata.headerTitle}
		{/if}
	  </div>
	</a>
	<div class="flex items-center space-x-4 leading-5 sm:space-x-6">
	  <nav class="pointer-events-auto hidden md:block">
		<ul class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
		  {#each headerNavLinks as link}
			<li>
			  <a class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 font-medium" class:text-teal-500={link.href === page.url.pathname} href={link.href}>
				{link.title}
				{#if link.href === page.url.pathname}
				  <span class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
				{/if}
			  </a>
			</li>
		  {/each}
		</ul>
	  </nav>
	  <ThemeSwitch />
	  <button on:click={toggleNav} aria-label="Toggle Menu" class="sm:hidden">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-8 w-8 text-gray-900 hover:text-teal-400 dark:text-gray-100 dark:hover:text-teal-400">
		  <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
		</svg>
	  </button>
	</div>
	{#if $navShow}
	  <button type="button" class="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100" on:click={toggleNav} aria-label="Close navigation menu"></button>
	  <div class="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100">
		<div class="flex flex-row-reverse items-center justify-between">
		  <button aria-label="Close menu" class="-m-1 p-1" type="button" on:click={toggleNav}>
			<svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 text-zinc-500 dark:text-zinc-400">
			  <path d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
			</svg>
		  </button>
		  <h2 class="text-sm font-medium text-zinc-600 dark:text-zinc-400">Navigation</h2>
		</div>
		<nav class="mt-6">
		  <ul class="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
			{#each headerNavLinks as link}
			  <li>
				<a class="block py-2" href={link.href} on:click={toggleNav}>{link.title}</a>
			  </li>
			{/each}
		  </ul>
		</nav>
	  </div>
	{/if}
  </header>

<style>
</style>
