<script lang="ts">
  import Header from "./Header.svelte";
  import "../app.css";
  import SectionContainer from "./SectionContainer.svelte";
  import "@fontsource/space-grotesk/latin.css";
  import Footer from "./footer.svelte";
  import client from "$lib/client";
  import { setContextClient } from "@urql/svelte";
  setContextClient(client);
  let { children } = $props();
</script>

<div class="flex flex-col min-h-screen justify-between">
  <SectionContainer>
    <div class="flex flex-col min-h-screen">
      <div class="flex flex-col items-center w-full p-4 sm:p-8">
        <Header />
        <main class="flex-1 w-full">
          {@render children()}
        </main>
      </div>
      <Footer />
    </div>
  </SectionContainer>
</div>

<style>
  /* .app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	} */
</style>
