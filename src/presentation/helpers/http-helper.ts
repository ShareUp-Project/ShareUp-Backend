import { HttpResponse } from "@/presentation/protocols";
import {
  AlreadyExistsError,
  ServerError,
  UnauthorizedError,
  NotFound,
} from "@/presentation/errors";

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError(),
});

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error,
});

export const notFound = (): HttpResponse => ({
  statusCode: 404,
  body: new NotFound(),
});

export const alreadyExistsData = (): HttpResponse => ({
  statusCode: 409,
  body: new AlreadyExistsError(),
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack),
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});
