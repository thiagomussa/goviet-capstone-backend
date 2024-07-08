import express from "express";
import router from "./routes/router.js";
import cors from "cors";
const app = express();

const PORT = process.env.PORT || 5050;

app.use(cors());

// Routes
app.use("/api", router);

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to my Express App</h1>`);
});

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
