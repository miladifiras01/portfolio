<script lang="ts">
  import ProjectModal from "./projectModal.svelte";
  import { getContextClient, queryStore, gql } from "@urql/svelte";
  import type { Project } from "./types";
  import {onMount, onDestroy} from "svelte"
  import type { Unsubscriber } from "svelte/store";

  const getProjectsQuery = gql`
    {
      getProjects {
        id
        name
        description
        githubUrl
        technologies {
          name
        }
        shortDescription
        images {
          imageUrl
        }
      }
    }
  `;

  const projectsQueryStore = queryStore({
    client: getContextClient(),
    query: getProjectsQuery,
  });

  let open = false;
  let selectedProject: Project | null = null;
  function close() {
    open = false;
    selectedProject = null;
  }
  let unsubscribe: Unsubscriber;
  function openModal(project: Project) {
    selectedProject = project;
    open = true;
  }
  onMount(() => {
    unsubscribe = projectsQueryStore.subscribe((value) => {
      console.log(value.data)
    });
  })
  onDestroy(() => {
    console.log('test')
    unsubscribe()
  });
</script>

<svelte:head>
  <title>Projects - Firas Miladi</title>
  <meta
    name="description"
    content="Discover web projects by Firas Miladi, built with Svelte, Angular, Laravel, FastAPI, and more. Explore innovative and scalable web applications."
  />
</svelte:head>
<main>
  <div class="sm:px-8 mt-16 sm:mt-32">
    <div class="mx-auto max-w-7xl lg:px-8">
      <div class="relative px-4 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-2xl lg:max-w-5xl">
          <header class="max-w-2xl">
            <h1
              class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
            >
              Projects I’ve contributed to.
            </h1>
            <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Throughout my time at Vayetek and in my academic journey, I’ve
              worked on projects that solve real-world problems. I’ve
              contributed to key features, improved performance, and helped
              shape better user experiences. Here are some of the projects I’ve
              been a part of.
            </p>
          </header>
          <div class="mt-16 sm:mt-20">
            <div class="mb-20">
              <h2
                class="text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl"
              >
                Websites
              </h2>
              <ul
                class="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                >
                {#if $projectsQueryStore.error}
                  <div class="text-red-500">
                  Error loading projects: {$projectsQueryStore.error.message}
                  </div>
                {:else if $projectsQueryStore.data}
                  {#each $projectsQueryStore.data.getProjects as project}
                    <li class="group relative flex flex-col items-start">
                      <button
                        type="button"
                        on:click={() => openModal(project)}
                        class="cursor-pointer"
                      >
                        <div
                          class="relative z-10 flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
                        >
                          <img
                            alt={project.name}
                            src={project.images[0]?.imageUrl}
                            class="h-full w-full"
                            loading="lazy"
                            style="color: transparent;"
                          />
                        </div>
                        <h3
                          class="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100"
                        >
                          <span class="relative z-10">{project.name}</span>
                        </h3>
                        <p
                          class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400"
                        >
                          {project.shortDescription}
                        </p>
                      </button>
                    </li>
                  {/each}
                {:else}
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span class="sr-only">Loading...</span>
                  </div>
                {/if}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
<ProjectModal {open} {close} project={selectedProject} />
