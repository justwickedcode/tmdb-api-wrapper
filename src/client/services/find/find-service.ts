import { findById, FindByIdParams } from '../../__generated__/api/tmdbApi';
import { CustomRequestInit } from '../../types';

export default class FindService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async byId(externalId: string, params: FindByIdParams) {
    return await findById(externalId, params, this.defaultOptions);
  }
}
