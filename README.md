# URL Shortener

A simple URL shortener service.

This README shows how to send requests to the API using Thunder Client (VS Code extension) or Postman.

> NOTE: The examples assume the server runs locally at `http://localhost:3000`. Replace the base URL and endpoint paths with the actual values used in your project if they differ.

## Prerequisites

- Node.js (if you run locally)
- The project running (e.g. `npm install` then `npm start` or `npm run dev`)
- Thunder Client extension (VS Code) or Postman installed

## Common API endpoints (examples)

- Create a shortened URL (POST)
  - POST /api/shorten
  - Body (JSON): `{ "originalUrl": "https://example.com/very/long/path" }`
  - Response: JSON containing the shortened code / short URL

- Redirect (GET)
  - GET /:code
  - Accessing the short URL in a browser (or `GET http://localhost:3000/abc123`) should redirect to the original long URL

- Optional: Get all URLs or stats (if implemented)
  - GET /api/urls
  - GET /api/urls/:code/stats

Adjust these endpoints to match the routes implemented in this repository.

## Example request body

JSON
{
  "originalUrl": "https://example.com/some/long/path"
}

Set header:
- `Content-Type: application/json`

## Using Thunder Client (VS Code)

1. Install the Thunder Client extension: https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client
2. Open Thunder Client in VS Code.
3. Create a new request:
   - Method: `POST`
   - URL: `http://localhost:3000/api/shorten`
4. Under the Body tab select `JSON` and paste the example JSON:
   {
     "longUrl": "https://example.com/some/long/path"
   }
5. Add header `Content-Type: application/json` if Thunder Client doesn't set it automatically.
6. Send the request. Inspect the response body for the shortened URL/code.
7. To test redirect, copy the returned short code/URL and open it in your browser or send a `GET` request to `http://localhost:3000/<code>`.

## Using Postman

1. Install Postman: https://www.postman.com/downloads/
2. Open Postman and create a new request.
3. Set method to `POST` and URL to `http://localhost:3000/api/shorten`.
4. Under the Body tab choose `raw` and `JSON` and paste:
   {
     "originalUrl": "https://example.com/some/long/path"
   }
5. Ensure the `Content-Type: application/json` header is set.
6. Click Send and inspect the returned JSON.
7. To test redirect, send a `GET` to `http://localhost:3000/<code>` or open it in a browser.

## Curl example

Create a short URL:
curl -X POST http://localhost:3000/api/shorten \
  -H "Content-Type: application/json" \
  -d '{"longUrl":"https://example.com/some/long/path"}'

Follow redirect (example):
curl -v http://localhost:3000/abc123

## Troubleshooting

- If you receive 404 errors, confirm the route paths in the project and update the URLs above.
- If the server isn't running, start it according to the repository's instructions (`npm install` then `npm start` / `npm run dev`).
- Check logs/console for errors.

---

If you want, I can add this README directly to the repository (create `README.md`). Would you like me to do that? If yes, confirm and tell me which branch to use (default: `main` or `master`).
