<script lang="ts">
  export let open;
  export let close;
  export let project: Project | null;
  type Project = {
    name: String;
    description: string;
    largeDescription: string;
    images: string[];
    technologies: string[];
    role: string;
    link: string;
  };
  let currentIndex = 0;

  function nextSlide() {
    if (project?.images && project?.images.length > 0) {
      currentIndex = (currentIndex + 1) % project?.images.length;
    }
  }

  function prevSlide() {
    if (project?.images && project?.images.length > 0) {
      currentIndex =
        (currentIndex - 1 + project?.images.length) % project?.images.length;
    }
  }
</script>

{#if open}
  <div
    class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center p-8 lg:p-0 z-50"
  >
    <div
      class="modal-overlay fixed w-full h-full bg-gray-900 opacity-50"
      on:click={close}
    ></div>
    <div
      class="bg-white w-full lg:h-max lg:w-1/2 mx-auto rounded-lg shadow-xl z-50 overflow-y-auto"
    >
      <div
        class="head bg-gray-100 py-5 px-8 text-2xl font-extrabold flex justify-between items-center"
      >
        {#if project}
          <span>{project.name}</span>
        {/if}
        <button
          class="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
          on:click={close}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
            />
          </svg>
        </button>
      </div>
      <div class="content p-8">
        {#if project && project.images.length > 0}
          <div class="relative w-full">
            <!-- Carousel wrapper -->
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
              {#each project.images as image, index}
                <div
                  class="absolute inset-0 transition-opacity duration-700 ease-in-out {index ===
                  currentIndex
                    ? 'opacity-100'
                    : 'opacity-0'}"
                >
                  <img
                    src={image}
                    class="block w-full h-full object-cover"
                    alt="Project Image"
                  />
                </div>
              {/each}
            </div>

            <!-- Slider controls -->
            <button
              on:click={prevSlide}
              class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              ◀
            </button>
            <button
              on:click={nextSlide}
              class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              ▶
            </button>
          </div>

          <p class="mt-4">{@html project.largeDescription}</p>
          <div
            class="mt-6 text-sm font-medium text-zinc-900 dark:text-zinc-100 lg:mt-10"
          >
            Tags
          </div>
          <div class="mt-2 flex flex-wrap gap-2">
            {#each project.technologies as tech}
              <div
                class="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              >
                {tech}
              </div>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}
