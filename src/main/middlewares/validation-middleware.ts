import { Schema } from "joi";
import { Request, Response, NextFunction } from "express";

export enum Parameters {
  BODY = "body",
  PARAM = "params",
  QUERY = "query",
  HEADER = "headers",
}

export const validationMiddleware = ({
  schema,
  parameters,
}: {
  schema: Schema;
  parameters: Parameters;
}) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.validateAsync(req[parameters]);
    next();
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
