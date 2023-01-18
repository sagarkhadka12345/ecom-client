import axios, { AxiosError } from "axios";
import { ZodIssue } from "zod";
export function isAxiosError<ResponseType>(
  error: unknown
): error is AxiosError<ResponseType> {
  return axios.isAxiosError(error);
}

export class ZodError extends Error {
  issues: ZodIssue[];
  name: string;
  constructor(issues: ZodIssue[], name: string) {
    super();
    this.issues = issues;
    this.name = name;
  }
}
