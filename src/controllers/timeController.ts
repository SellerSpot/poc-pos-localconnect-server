import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  res.send({
    status: true,
    data: Date.now(),
  });
};
