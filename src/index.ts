import express from 'express';
import 'dotenv/config';
import * as bodyParser from "body-parser";

import TokenRouter from "./router"
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(TokenRouter)

app.listen(process.env.PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${process.env.PORT}`);
});