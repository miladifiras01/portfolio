<script>
  import headerNavLinks from "$lib/data/headerNavLinks";
</script>
<footer class="mt-auto w-full">
  <div class="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
    <div class="relative px-4 lg:px-12">
      <div class="mx-auto max-w-2xl lg:max-w-5xl">
        <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div class="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
            {#each headerNavLinks as link }
              <a class="transition hover:text-teal-500 dark:hover:text-teal-400" href={link.href}>
                {link.title}
              </a>
            {/each}
          </div>
          <p class="text-sm text-zinc-400 dark:text-zinc-500">
            © 2025 Firas Miladi. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>
