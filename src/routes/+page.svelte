<script lang="ts">
  import photo1 from "$lib/images/photo_iac.jpg";
  import photo2 from "$lib/images/Firas Miladi.jpg";
  import photo3 from "$lib/images/IMG_3225-2.jpg";
  import photo4 from "$lib/images/insat.jpg";
  import photo5 from "$lib/images/vayetek_logo.jpeg";
  import resume from "$lib/pdf/firas_miladi.pdf";
</script>

<svelte:head>
  <title>Home - Firas Miladi</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
  <div class="sm:px-8 mt-9">
    <div class="mx-auto max-w-7xl lg:px-8">
      <div class="relative px-4 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-2xl lg:max-w-5xl">
          <div class="max-w-2xl">
            <h1
              class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
            >
              Software engineer and tech enthusiast
            </h1>
            <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I'm Firas, a software engineer who loves building web applications
              and solving problems. I focus on creating clean designs, improving
              workflows, and making user-friendly experiences. My goal is to
              turn ideas into reality through code.
            </p>
            <div class="mt-6 flex gap-6">
              <a
                class="group -m-1 p-1"
                aria-label="Follow on GitHub"
                href="https://github.com/miladifiras01"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                  ></path>
                </svg>
              </a>
              <a
                class="group -m-1 p-1"
                aria-label="Follow on LinkedIn"
                href="https://www.linkedin.com/in/miladi-firas/"
              >
                <svg
                  viewBox="0 0 24 24"
                  class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                >
                  <path
                    d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"
                  ></path>
                </svg>
              </a>
              <a
                class="group -m-1 p-1"
                aria-label="Follow on LinkedIn"
                href="mailto:miladi.firas25@gmail.com"
                ><svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                  ><path
                    fill-rule="evenodd"
                    d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                  ></path></svg
                ></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-16 sm:mt-20">
    <div
      class="flex justify-center gap-5 overflow-x-auto sm:overflow-visible py-4 sm:gap-8 px-4"
    >
      <div
        class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2"
      >
        <img
          alt=""
          src={photo1}
          width="512"
          height="569"
          decoding="async"
          data-nimg="future"
          class="h-full w-full object-cover"
          loading="lazy"
          style="color: transparent;"
        />
      </div>
      <div
        class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2"
      >
        <img
          alt=""
          src={photo2}
          width="512"
          height="569"
          decoding="async"
          data-nimg="future"
          class="h-full w-full object-cover"
          loading="lazy"
          style="color: transparent;"
        />
      </div>
      <div
        class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2"
      >
        <img
          alt=""
          src={photo3}
          width="512"
          height="569"
          decoding="async"
          data-nimg="future"
          class="h-full w-full object-cover"
          loading="lazy"
          style="color: transparent;"
        />
      </div>
      <div
        class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2"
      >
        <img
          alt=""
          src={photo4}
          width="512"
          height="569"
          decoding="async"
          data-nimg="future"
          class="h-full w-full object-cover"
          loading="lazy"
          style="color: transparent;"
        />
      </div>
    </div>
  </div>
  <div class="sm:px-8 mt-24 md:mt-28">
    <div class="max-w-7xl lg:px-8">
      <div class="relative px-4 sm:px-8 lg:px-12">
        <div class="">
          <div class="max-w-xl lg:max-w-none">
            <div class="space-y-10">
              <div
                class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
              >
                <h2
                  class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                    class="h-6 w-6 flex-none"
                    ><path
                      d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                      class="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                    ></path><path
                      d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                      class="stroke-zinc-400 dark:stroke-zinc-500"
                    ></path></svg
                  ><span class="ml-3">Work</span>
                </h2>
                <ol class="mt-6 space-y-4">
                  <li class="flex gap-4">
                    <div
                      class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
                    >
                      <img
                        alt=""
                        src={photo5}
                        width="1134"
                        height="1134"
                        decoding="async"
                        data-nimg="future"
                        class="h-7 w-7 rounded-full"
                        loading="lazy"
                        style="color: transparent;"
                      />
                    </div>
                    <dl class="flex flex-auto flex-wrap gap-x-2">
                      <dt class="sr-only">Company</dt>
                      <dd
                        class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100"
                      >
                        Vayetek
                      </dd>
                      <dt class="sr-only">Role</dt>
                      <dd class="text-xs text-zinc-500 dark:text-zinc-400">
                        Software Engineer
                      </dd>
                      <dt class="sr-only">Date</dt>
                      <dd
                        class="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                        aria-label="Mar 2024 until Present"
                      >
                        <time datetime="Mar 2024">Jun 2023</time>
                        <span aria-hidden="true">—</span>
                        <time datetime="2025">Present</time>
                      </dd>
                    </dl>
                  </li>
                </ol>
                <a
                  class="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
                  download="Firas_Miladi_Resume"
                  target="_blank"
                  href={resume}
                  >Download CV<svg
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    class="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
                    ><path
                      d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path></svg
                  ></a
                >
              </div>
              <form
                action="/thank-you"
                class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
              >
                <h2
                  class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                    class="h-6 w-6 flex-none"
                    ><path
                      d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                      class="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                    ></path><path
                      d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
                      class="stroke-zinc-400 dark:stroke-zinc-500"
                    ></path></svg
                  ><span class="ml-3">Stay up to date</span>
                </h2>
                <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Get notified when I publish something new, and unsubscribe at
                  any time.
                </p>
                <div class="mt-6 flex">
                  <input
                    type="email"
                    placeholder="Email address"
                    aria-label="Email address"
                    required
                    class="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                  /><button
                    class="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none"
                    type="submit">Join</button
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
