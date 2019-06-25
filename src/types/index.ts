import {AxiosInstance} from 'axios';



export interface IConfig {
    apiRoot: string,
    apiversion : string,
    apiKey : string
}


export interface IRequest {
    config: IConfig,
    getInstance():AxiosInstance 
}



export interface IChannel {
    config: IConfig

}

export interface IEntity {
    id: number,
    displayName: string,
    displayDescription: string,
    version: string,
    lockedBy: string,
    createdBy: string,
    createdDate: string,
    formattedCreatedDate: string,
    modifiedBy: string,
    modifiedDate: string,
    formattedModifiedDate: string,
    resourceUrl: string,
    entityTypeId: string,
    entityTypeDisplayName: string,
    completeness: number,
    fieldSetId: string,
    fieldSetName: string,
    segmentId: number,
    segmentName: string
}

