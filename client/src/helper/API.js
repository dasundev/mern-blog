import * as axios from "axios";

export default class Api {
    constructor() {
        this.api_url = "http://localhost:5000";
    }

    init = () => {
        this.client = axios.create({
            baseURL: this.api_url,
            timeout: 30000,
        }); 

        return this.client;
    }

    getPostsList = () => {
        return this.init().get("/posts");
    }

    getPostDetails = (params) => {
        return this.init().get("/posts/" + params.postId);
    }

}