import express, {Request, Response} from "express";
import { getPlayer } from "./controllers/players-controller";


function creatApp() {
    const app = express();

    app.use(express.json());

    app.get("/", getPlayer);

    return app;
}

export default creatApp;
