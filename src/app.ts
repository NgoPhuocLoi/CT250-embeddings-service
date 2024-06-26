import express from "express";
import cors from "cors";
import apiRoutes from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", apiRoutes);

export default app;
