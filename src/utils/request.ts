import axios,{AxiosInstance}  from 'axios';
import {IConfig, IRequest} from '../types' ;

export default class Request implements IRequest{
    config: IConfig;

    constructor(config:IConfig) {
        this.config = config;
    }

    public getInstance = ():AxiosInstance => {
        return axios.create({
            baseURL: `${this.config.apiRoot}/api/${this.config.apiversion}/`,
            headers: {'X-inRiver-APIKey': this.config.apiKey},
            responseType: 'json'
        });
    }
}
