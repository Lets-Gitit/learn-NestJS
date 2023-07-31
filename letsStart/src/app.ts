import * as express from "express";

const app: express.Express = express();
const port: number = 8000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ name: "이찬영", age: 99 });
  console.log();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
