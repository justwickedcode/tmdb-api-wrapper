import * as orval from '../../__generated__/api/find/find';
import { FindByIdParams } from '../../__generated__/schema';
import { CustomRequestInit } from '../../types';

export default class FindService {
  constructor(private readonly defaultOptions: CustomRequestInit) {}

  public async byId(externalId: string, params: FindByIdParams) {
    return await orval.findById(externalId, params, this.defaultOptions);
  }
}
