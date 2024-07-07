import "reflect-metadata";
import {MONGODB_URI, ORIGIN, PORT} from "./configuration";
import {rootRouter} from "./routes/rootRouter";
import express from "express";
import cors from "cors";
import * as mongoose from "mongoose";
import {UserModel} from "./entities/userEntity";
import {ReviewModel} from "./entities/reviewEntity";
import {BookModel} from "./entities/bookEntity";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({origin: ORIGIN, credentials: true}));
app.use(rootRouter);

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log(`Database successfully connected`);
        initCollections();
    })
    .catch((err) => console.error(`Error occurs until database connection: \n\r ${err}`))

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
const initCollections = async () => {
    try {
        await UserModel.createCollection();
        await ReviewModel.createCollection();
        await BookModel.createCollection();
        console.log("Collections successfully initialized");
    } catch (err){
        console.error('Error until initializing collections:',err);
    }
};