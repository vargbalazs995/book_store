import {MONGODB_URI, ORIGIN, PORT} from "./configuration";
import {rootRouter} from "./routes/rootRouter";
import express from "express";
import cors from "cors";
import * as mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(cors({origin: ORIGIN, credentials: true}));
app.use(rootRouter);

mongoose.connect(MONGODB_URI, {})
    .then(() => { console.log(`Database successfully connected`); })
    .catch((err) => console.error(`Error occurs until database connection: \n\r ${err}`))

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
