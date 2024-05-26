import express from "express";
import { prismaClient } from "./db";

export const app = express();
app.use(express.json());
app.post("/sum", async (req, res) => {
  console.log({req})
  const a = req.body.a;
  const b = req.body.b;

  if (a > 1000000 || b > 1000000) {
    return res.status(422).json({
      message: "Sorry we dont support big numbers",
    });
  }
  const result = a + b;

  const request = await prismaClient.request.create({
    data: {
      a: a,
      b: b,
      result: result,
      type: "ADD",
    },
  });

  res.status(200).json({ answer: result, id: request.id });
});


