<script lang="ts">
  import type { Project } from "./types";
  export let open;
  export let close;
  export let project: Project | null;
  
  let currentIndex = 0;

  function nextSlide() {
    if (project?.images && project?.images.length > 0) {
      currentIndex = (currentIndex + 1) % project.images.length;
    }
  }

  function prevSlide() {
    if (project?.images && project?.images.length > 0) {
      currentIndex = (currentIndex - 1 + project.images.length) % project.images.length;
    }
  }
</script>

{#if open}
  <div class="fixed inset-0 flex items-center justify-center p-4 z-50 ">
    <!-- Overlay (Clickable Background) -->
    <button 
      type="button"
      class="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
      on:click={close}
      on:keydown={(e) => e.key === 'Enter' && close()}
      aria-label="Close modal"
    ></button>

    <!-- Modal Content -->
    <div class="overflow-y-auto max-h-screen absolute max-w-screen bg-white dark:bg-zinc-900 w-full max-w-2xl rounded-lg shadow-xl ">
      <!-- Modal Header -->
      <div class="sticky top-0 bg-gray-100 dark:bg-zinc-800 py-4 px-6 flex justify-between items-center z-10">
        {#if project}
          <h2 class="text-xl font-bold text-zinc-800 dark:text-zinc-100">{project.name}</h2>
        {/if}
        <button 
          type="button"
          class="p-2 bg-gray-200 hover:bg-gray-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 rounded-full"
          on:click={close}
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
          </svg>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-6">
        {#if project && project.images.length > 0}
          <!-- Image Carousel -->
          <div class="relative w-full">
            <div class="relative h-56 md:h-80 lg:h-96 overflow-hidden rounded-lg">
              {#each project.images as image, index}
                <div
                  class="absolute inset-0 transition-opacity duration-700 ease-in-out {index === currentIndex ? 'opacity-100' : 'opacity-0'}"
                >
                  <img src={image.imageUrl} class="w-full h-full object-contain" alt={`Image of ${project.name}`} />
                </div>
              {/each}
            </div>

            <!-- Navigation Controls -->
            <button
              on:click={prevSlide}
              class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 dark:bg-zinc-700 text-white p-2 rounded-full shadow-md"
              aria-label="Previous Slide"
            >
              ◀
            </button>
            <button
              on:click={nextSlide}
              class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 dark:bg-zinc-700 text-white p-2 rounded-full shadow-md"
              aria-label="Next Slide"
            >
              ▶
            </button>
          </div>

          <!-- Description -->
          <div class="mt-6 text-base text-zinc-600 dark:text-zinc-400 prose dark:prose-invert">
            {@html project.description}
          </div>

          <!-- Tags -->
          <div class="mt-6 text-sm font-medium text-zinc-900 dark:text-zinc-100">Tags</div>
          <div class="mt-2 flex flex-wrap gap-2">
            {#each project.technologies as tech}
              <div class="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                {tech.name}
              </div>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}
