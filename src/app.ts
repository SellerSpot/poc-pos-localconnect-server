import express, { Request, Response, Application } from "express";
import mainRouter from "./routes/mainRouter";
import bodyParser from "body-parser";
import { systray } from "./middlewares/systray";

const app: Application = express();

// declaring middlewares
app.use(bodyParser.json({ limit: 50 }));

systray;

// defining main route
app.use("/v1", mainRouter);

// defining default route
app.use("/", (req: Request, res: Response) => {
  res.send("Welcome to SellerSpot LocalConnect Server");
});

// listening on port
app.listen(4000, () => console.log("LocalConnect server running on port 4000"));
