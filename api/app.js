import express from "express";
import postRoute from "./routes/post.route.js";

const app = express();

app.use("/api/post", postRoute);

app.use("/api/test", (req, res) => {
  res.send("It works!");
});

app.listen(8800, () => {
  console.log("Server is running!");
});
