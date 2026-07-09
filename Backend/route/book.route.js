import express from "express";
import { getBook } from "../controller/bookcontroller.js";

const route = express.Router();

route.get("/", getBook);

export default route;