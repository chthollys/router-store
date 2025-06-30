import bodyParser from "body-parser";
import express from "express";
import eventRoutes from "./routes/events.js";
import cors from "cors";
import { configDotenv } from "dotenv";

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/events", eventRoutes);

configDotenv();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening in http://localhost:${port}`);
});
