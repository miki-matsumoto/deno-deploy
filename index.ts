import { serve } from "https://deno.land/x/sift/mod.ts";

addEventListener("fetch", async (event) => {
  let response = await fetch("https://app.octofy.dev/index.js");
  const headers = {
    "cache-control": "public, max-age=14400",
    "content-type": "text/javascript",
  };
  response = new Response(response.body, { ...response, headers });

  event.respondWith(response);
});

