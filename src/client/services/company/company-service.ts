import * as orval from "../../__generated__/api/company/company"
import { CustomRequestInit } from "../../types";

export default class CompanyService {
    constructor(private readonly defaultOptions: CustomRequestInit) {}

    public async getDetails(companyId: number) {
        return await orval.companyDetails(companyId, this.defaultOptions);
    }

    public async getAlternativeNames(companyId: number) {
        return await orval.companyAlternativeNames(companyId, this.defaultOptions);
    }

    public async getImages(companyId: number) {
        return await orval.companyImages(companyId, this.defaultOptions);
    }
}