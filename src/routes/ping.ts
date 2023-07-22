import express from "express";
import Response from "../responses/Response.js";

const router = express.Router();

router.get("/", (req, res) => {
    new Response(req, res).send("Pong");
});

export default router;