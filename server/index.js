import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./routes/tasks.js";
import userRoutes from "./routes/users.js";

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/tasks", taskRoutes);
app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = "";

app.get("/", (req, res) => {
  res.send("TODO LIST API");
});

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));
