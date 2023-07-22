import express from "express";

import play from "./play.js";

const router = express.Router();

router.use("/play", play);

export default router;