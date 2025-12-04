import { CustomRequestInit } from "../../types";

export default class MovieService {
    constructor(private readonly defaultOptions: CustomRequestInit) {}
}