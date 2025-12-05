import { CustomRequestInit } from "./client/types";

export class TmdbClient {
  constructor(private readonly defaultOptions: CustomRequestInit) {}
}
