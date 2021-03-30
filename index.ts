addEventListener("fetch", async (event) => {
  let response = await fetch('https://staging.rolle.io/index.js')
  const headers = { "cache-control": "public, max-age=14400", 'content-type': 'text/javascript' }
  response = new Response(response.body, { ...response, headers })

  event.respondWith(response)
});
