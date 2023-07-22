import express from "express";
import dotenv from "dotenv";

import pingRouter from "./routes/ping.js";

dotenv.config();

const app = express();

app.use("/", (req, res) => {
    res.send("MonkeyMetadataGrabber API, see <a href=\"https://github.com/MonkeyRadio/MairlistMetadataGrabber\" target=\"_blank\"/>Repository</a> for documentation");
});

app.use("/ping", pingRouter);

const port: number = Number(process.env.PORT) || 3000;

try {
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
} catch (error) {
    console.error(error);
}