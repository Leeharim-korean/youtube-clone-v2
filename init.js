import dotenv from "dotenv";

dotenv.config();

import "./db";
import app from "./app";

import "./models/Comment";
import "./models/User";
import "./models/Video";


const PORT = process.env.PORT || 4001;

const handleListening = () =>
  console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);