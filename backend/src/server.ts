import {MONGODB_URI, ORIGIN, PORT} from "./configuration";
import {rootRouter} from "./routes/rootRouter";

const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose')

app.use(express.json());
app.use(cors({origin: ORIGIN, credentials: true}));
mongoose.connect(MONGODB_URI, {}).then(() => {
    app.use(rootRouter)
    console.log('Connected to DB')
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
