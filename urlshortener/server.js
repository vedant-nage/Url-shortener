import express from "express";
import { nanoid } from "nanoid";

const app = express();
const PORT = 3000;


const urlDatabase = {};

app.use(express.json());
//middleware
app.use((req, res, next) => {
  console.log( req.method, req.url);//this is use to check ,request is working or not 
  next();
});
// here we send the post request like the https://youtube.com and if we send srequest then we will get the response
app.post("/shorten", (req, res) => {
  const { originalUrl } = req.body;
  if (!originalUrl) return res.status(400).json({ error: "URL required" });

  const id = nanoid(6); 
  urlDatabase[id] = originalUrl;
  console.log(urlDatabase);
  res.json({ shortUrl: `http://localhost:${PORT}/${id}` });
});

// Route to redirect to the original url
app.get("/:id", (req, res) => {
  const originalUrl = urlDatabase[req.params.id];
  if (!originalUrl) return res.status(404).send("URL not found");

  res.redirect(originalUrl);
});

app.listen(PORT, () => {
  console.log(`URL shortener running at http://localhost:${PORT}`);
});