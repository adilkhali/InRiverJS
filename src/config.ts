import {IConfig} from './types' ;

export default class Config implements IConfig{
    apiRoot: string;
    apiversion : string;
    apiKey : string;

    constructor(apiRoot:string ='https://apieuw.productmarketingcloud.com/' , apiversion:string = 'v1.0.0' , apiKey:string) {
        this.apiRoot = apiRoot;
        this.apiversion = apiversion;
        this.apiKey = apiKey;
    }
}

