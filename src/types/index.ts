import { AxiosInstance } from "axios";

export interface IConfig {
  apiRoot: string;
  apiversion: string;
  apiKey: string;
}

export interface IRequest {
  config: IConfig;
  getInstance(): AxiosInstance;
}

export interface IChannel {
  id: number;
  displayName: string;
  displayDescription: string;
  entityTypeId: string;
  createdDate: string;
  modifiedDate: string;
  isPublished: boolean;
}

export interface IEntity {
  id: number;
  displayName: string;
  displayDescription: string;
  version: string;
  lockedBy: string;
  createdBy: string;
  createdDate: string;
  formattedCreatedDate: string;
  modifiedBy: string;
  modifiedDate: string;
  formattedModifiedDate: string;
  resourceUrl: string;
  entityTypeId: string;
  entityTypeDisplayName: string;
  completeness: number;
  fieldSetId: string;
  fieldSetName: string;
  segmentId: number;
  segmentName: string;
}

export interface IEntityList {
  count: number;
  entityIds: string[];
}

export interface IEntityLink {
  id: 7;
  isActive: boolean;
  linkTypeId: string;
  sourceEntityId: number;
  targetEntityId: number;
  linkEntityId: string;
  index: number;
}

export interface IStructureEntities {
  entityId: number;
  entityTypeId: string;
  name: string;
  sortOrder: 0;
  path: string;
  linkEntityId: 0;
  linkTypeIdFromParent: string;
}
export interface ISyndications {
  extensionDisplayName: string;
  extensionId: string;
  id: number;
  mappingName: string;
  name: string;
  outputFormat: string;
  workareaName: string;
  workareaId: string;
}
