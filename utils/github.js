import axios from 'axios';
import { CONSTANT } from '../constant/index.mjs';


export class Github {
    GITHUB_BASE_URL = 'https://api.github.com'
    constructor(token = null) {
        this.token = token
    }

    async me() {
        try {
            return (await axios(`${this.GITHUB_BASE_URL}/users/${CONSTANT.GITHUB_USERNAME}`))?.data
        } catch (error) {
            throw new Error(error)
        }
    }

}