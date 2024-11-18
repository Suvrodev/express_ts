import express, { Application, Request, Response } from "express";
import cors from "cors";
import { StudentRoute } from "./app/modules/student/student.route";
const app: Application = express();

//Perser
app.use(express.json());
app.use(cors());

//application routes
app.use("/api/v1/students", StudentRoute);

const getHelloController = async (req: Request, res: Response) => {
  res.send("Hello from controller--🙋‍♂️");
};

app.get("/", getHelloController);

export default app;
