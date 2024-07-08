import express from "express";
import router from "./routes/router.js";
const app = express();

const PORT = process.env.PORT || 5050;

// Routes
app.use("/api", router);

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to my Express App</h1>`);
});

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
