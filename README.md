# Node Farm

Node.js fundamentals, worked through with a "farm stand" example: reading product data, rendering it into HTML templates, and serving it without a framework.

- `index.js` — file system basics: reading/writing files both synchronously and asynchronously with callbacks.
- `starter/` — the exercise as given, before any of it is filled in.
- `final/` — the finished version: an HTTP server (`final/index.js`) that reads `dev-data/data.json`, swaps values into the HTML templates in `templates/`, and serves overview/product pages depending on the route.

## Running the finished version

```bash
cd final
npm install
node index.js
```
