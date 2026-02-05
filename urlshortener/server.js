import express from "express";
import { nanoid } from "nanoid";

const app = express();
const port = 3000;


const urlDatabase = {};

app.use(express.json());

app.use((req, res, next) => {
  console.log( req.method, req.url);
  next();
});

app.post("/shorten", (req, res) => {
  const { originalUrl } = req.body;
  if (!originalUrl) return res.status(400).json({ error: "URL required" });

  const id = nanoid(6); 
  urlDatabase[id] = originalUrl;
  console.log(urlDatabase);
  res.json({ shortUrl: `http://localhost:${port}/${id}` });
});

app.get("/:id", (req, res) => {
  const originalUrl = urlDatabase[req.params.id];
  if (!originalUrl) return res.status(404).send("URL not found");

  res.redirect(originalUrl);
});

app.listen(PORT, () => {
  console.log(`URL shortener running at http://localhost:${port}`);
});
