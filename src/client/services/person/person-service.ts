import { CustomRequestInit } from "../../types";

export default class PersonService {
    constructor(private readonly defaultOptions: CustomRequestInit) {}
}