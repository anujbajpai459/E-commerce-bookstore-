import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conn from "./conn/conn.js";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

conn();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World");
});
 app.use("/book",bookRoute);
 app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});