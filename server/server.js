import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

// general setup

const app = express();

app.use(bodyParser.json({ limit: "32mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "32mb", embedded: true }));
app.use(cors());

app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://worldseek:NatMart34@cluster0.jjhse.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//need port
const PORT = process.env.PORT || 5000;

//connect to database with connection and listen to port
mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
