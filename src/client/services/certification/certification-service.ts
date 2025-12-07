import { certificationMovieList, certificationsTvList } from "../../__generated__/api/tmdbApi";
import { CustomRequestInit } from "../../types";

export default class CertificationService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getMovieList() {
    return await certificationMovieList(this.defaultOptions);
  }

  public async getTvList() {
    return await certificationsTvList(this.defaultOptions);
  }
}
