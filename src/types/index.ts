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
export interface IImageConfiguration {
  id: number;
  name: string;
  extension: string;
  outputExtension: string;
  arguments: string;
}

export interface IRoles {
  id: number;
  name: string;
  description: string;
  permissions: [];
}

export interface ISegments {
  id: 0;
  name: string;
  description: string;
  roles: IRoles[];
}

export interface IMediaInfoModel {
  fileId?: number;
  url?: string;
  fileName?: string;
  extension?: string;
  fileSize?: number;
  dateCreated?: string;
  lastModified?: string;
  entityId?: number;
}
export interface IBase64FileModelWithLink {
  fileName?: string;
  data?: string;
  resourceLink?: IResourceLinkModel;
}
export interface IUrlFileModelWithLink {
  fileName?: string;
  overrideUrlFileName?: string;
  resourceLink?: IResourceLinkModel;
}
export interface IExternalUrlFileModelWithLink {
  url?: string;
  resourceLink?: IResourceLinkModel;
}
export interface IResourceLinkModel {
  sourceEntityId?: number;
  linkTypeId?: string;
}

export interface ILinkModel {
  id?: number;
  isActive?: boolean;
  linkTypeId: string;
  sourceEntityId: number;
  targetEntityId: number;
  linkEntityId?: number;
  index?: number;
}
