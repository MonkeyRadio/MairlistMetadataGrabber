import {Response as expressRes, Request as expressReq} from "express";

export default class Response {

    constructor(private req: expressReq,private res: expressRes) { }

    send(data: any) {
        if (this.req.accepts("json")) {
            this.sendJson(data);
            return;
        }
        this.sendText(data);
    }

    sendText(data: any) {
        this.res.send(data);
    }

    sendJson(data: any) {
        this.res.json({ data : data, type: typeof data });
    }

    notFound() {
        this.res.status(404).send("Not found");
    }

    badRequest() {
        this.res.status(400).send("Bad request");
    }

    internalServerError() {
        this.res.status(500).send("Internal server error");
    }

    unauthorized() {
        this.res.status(401).send("Unauthorized");
    }

    forbidden() {
        this.res.status(403).send("Forbidden");
    }
    
    error(code: number, message: string) {
        this.res.status(code).send(message);
    }

    unknownError() {
        this.res.status(500).send("Unknown error");
    }
}