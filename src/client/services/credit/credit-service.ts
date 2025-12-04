import * as orval from "../../__generated__/api/credit/credit"
import { CustomRequestInit } from "../../types";

export default class CreditService {
    constructor(private readonly defaultOptions: CustomRequestInit) {}
    
    public async getDetails(creditId: string) {
        return await orval.creditDetails(creditId, this.defaultOptions);
    }
}