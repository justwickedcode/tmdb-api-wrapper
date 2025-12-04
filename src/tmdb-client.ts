import { CustomRequestInit } from "./client/types";

export class TmdbClient {
  private readonly defaultOptions: CustomRequestInit;

  constructor(accessToken: string) {
    this.defaultOptions = {
      next: {
        revalidate: 3600,
        tags: ['tmdb']
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
  }
}
