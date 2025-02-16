import { createClient, cacheExchange, fetchExchange } from "@urql/svelte";
import { PUBLIC_BACKEND_URL } from '$env/static/public';

const client = createClient({
  url: PUBLIC_BACKEND_URL,
  exchanges: [cacheExchange, fetchExchange],
});
export default client;
