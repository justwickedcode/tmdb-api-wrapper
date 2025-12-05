import * as orval from '../../__generated__/api/certification/certification';
import { CustomRequestInit } from '../../types';

export default class CertificationService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async getMovieList() {
    return await orval.certificationMovieList(this.defaultOptions);
  }

  public async getTvList() {
    return await orval.certificationsTvList(this.defaultOptions);
  }
}
