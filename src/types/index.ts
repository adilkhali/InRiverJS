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
  id?: number;
  displayName?: string;
  displayDescription?: string;
  entityTypeId?: string;
  createdDate?: string;
  modifiedDate?: string;
  isPublished?: boolean;
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

export interface IEntityListModel {
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
  roles?: IRoles[];
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

export interface IWorkAreaFolderModel {
  id?: string;
  name?: string;
  isQuery?: boolean;
  index?: number;
}

export interface IWorkAreaTreeFolderModel {
  id?: number;
  name?: string;
  isQuery?: boolean;
  folders?: IWorkAreaTreeFolderModel[];
}

export interface IWorkAreaCreationModel {
  name: string;
  isShared: boolean;
  query?: IQueryModel;
  entityIds?: number[];
  index?: number;
  parentId?: string;
  username?: string;
}

export interface IQueryModel {
  systemCriteria?: ISystemCriterionModel[];
  dataCriteria?: IDataCriterionModel[];
  linkCriterion?: ILinkCriterionModel;
}

export interface ISystemCriterionModel {
  type?: string;
  value?: {};
  operator?: string;
}

export interface ILinkCriterionModel {
  dataCriteria?: IDataCriterionModel[];
  linkTypeId?: string;
  direction?: string;
  linkExists?: boolean;
}
export interface IDataCriterionModel {
  fieldTypeId?: string;
  value?: {};
  language?: string;
  operator?: string;
}

export interface IModelModel {
  id: string;
  name: string;
  fieldTypes: IFieldTypeModel[];
  inboundLinkTypes: string[];
  outboundLinkTypes: string[];
  isLinkEntityType: boolean;
  fieldSetIds: string[];
  displayNameFieldTypeId: string;
  displayDescriptionFieldTypeId: string;
}

export interface IFieldTypeModel  {
  fieldTypeId: string;
  fieldTypeDisplayName: string;
  fieldTypeDescription: string;
  fieldDataType: string;
  isMultiValue: boolean;
  isHidden: boolean;
  isReadOnly: boolean;
  isMandatory: boolean;
  isUnique: boolean;
  isExcludedFromDefaultView: boolean;
  includedInFieldSets: string[];
  categoryId: string;
  index: number;
  cvlId: string;
  parentCvlId: string;
  settings: {};
}

export interface ILanguageModel {
  name?: string;
  displayName?: string;
}

export interface IFieldSet {
  fieldSetId?: string;
  name?: string;
  description?: string;
  entityTypeId?: string;
  fieldTypeIds?: string[];
}

export interface ICVL {
  id: string;
  parentId?: string;
  dataType?: string;
}

export interface ICVLValueModel {
  key: string;
  value?: {};
  index?: number;
  parentKey?: string;
}

export interface ISpecificationTemplatesModel {
  id?: number;
  displayName?: string;
  displayDescription?: string;
  version?: string;
  lockedBy?: string;
  createdBy?: string;
  createdDate?: string;
  formattedCreatedDate?: string;
  modifiedBy?: string;
  modifiedDate?: string;
  formattedModifiedDate?: string;
  resourceUrl?: string;
  entityTypeId?: string;
  entityTypeDisplayName?: string;
  completeness?: number;
  fieldSetId?: string;
  fieldSetName?: string;
  segmentId?: number;
  segmentName?: string;
}

export interface ISpecificationTemplateModel {
  id?: string;
  name?: {};
  dataType?: string;
  categoryId?: string;
  defaultValue?: string;
  format?: string;
  unit?: string;
  isDisabled?: true;
  isMultiValue?: true;
  isMandatory?: true;
  index?: 0;
  cvlId?: string;
}

export interface IEntitySummaryModel {
  id?: number;
  displayName?: string;
  displayDescription?: string;
  version?: string;
  lockedBy?: string;
  createdBy?: string;
  createdDate?: string;
  formattedCreatedDate?: string;
  modifiedBy?: string;
  modifiedDate?: string;
  formattedModifiedDate?: string;
  resourceUrl?: string;
  entityTypeId?: string;
  entityTypeDisplayName?: string;
  completeness?: number;
  fieldSetId?: string;
  fieldSetName?: string;
  segmentId?: number;
  segmentName?: string;
}

export interface IFieldValueModel {
  fieldTypeId: string;
  value: {};
}

export interface IEntityCreationModel {
  entityTypeId: string;
  fieldValues?: IFieldValueModel[];
  segmentId?: number;
}

export interface IMapUniqueValuesModel {
  fieldTypeId: string;
  uniqueValues: [];
}

export interface IEntityModel {
  fieldTypeId: string;
  entityId: number;
  fieldTypeDisplayName: string;
  fieldTypeDescription: string;
  fieldDataType: string;
  value: {};
  displayValue: {};
  isMultiValue: boolean;
  isHidden: boolean;
  isReadOnly: boolean;
  isMandatory: boolean;
  isUnique: boolean;
  isExcludedFromDefaultView: boolean;
  includedInFieldSets: string[];
  categoryId: string;
  categoryName: string;
  index: number;
  revision: number;
  cvlId: string;
  parentCvlId: string;
  settings: {};
}

export interface ISpecificationValueModel {
  specificationFieldTypeId: string ;
  value: {};
}

export interface IFetchObjectsModel {
  entityIds: number[];
  objects: "EntitySummary" | "FieldsSummary" | "FieldValues" |
  "SpecificationSummary" | "SpecificationValues" | "Media" | "MediaDetails";
  fieldTypeIds?: string;
  inbound?: IFetchLinkObjectsModel;
  outbound?: IFetchLinkObjectsModel;
}

export interface IFetchLinkObjectsModel {
  linkTypeIds?: string;
  objects?: string;
}

export interface ISummaryModel {
  entityId?: number;
  linkTypeId?: string;
  linkIndex?: number;
  summary?: IEntitySummaryModel;
  fields?: IFieldSummaryModel[];
  fieldValues?: IFieldValueModel[];
  specification?: ISpecificationValueSummaryModel[];
  specificationValues?: ISpecificationValueModel[];
  media?: string[];
  mediaDetails?: IMediaInfoModel[];
  inbound?: IEntityDataModel[];
  outbound?: IEntityDataModel[];
}

export interface IFieldSummaryModel {
  fieldTypeId?: string;
  entityId?: number;
  fieldTypeDisplayName?: string;
  fieldTypeDescription?: string;
  fieldDataType?: string;
  value?: object;
  displayValue?: object;
  isMultiValue?: boolean;
  isHidden?: boolean;
  isReadOnly?: boolean;
  isMandatory?: boolean;
  isUnique?: boolean;
  isExcludedFromDefaultView?: boolean;
  includedInFieldSets?: string[];
  categoryId?: string;
  categoryName?: string;
  index?: number;
  revision?: number;
  cvlId?: string;
  parentCvlId?: string;
  settings?: any;
}

export interface ISpecificationValueSummaryModel {
  entityId: number;
  name: string;
  categoryId: string;
  value: object;
  displayValue: object;
  parentCvlId: string;
  cvlId: string;
  isMultiValue: boolean;
  index: number;
  isFormatted: boolean;
  specificationFieldTypeId: string;
  unit: string;
  specificationDataType: string;
  mandatory: boolean;
  isHidden: boolean;
  isReadOnly: boolean;
}

export interface IEntityDataModel {
  entityId: number;
  linkTypeId: string;
  linkIndex: number;
  summary: IEntitySummaryModel;
  fields: IFieldSummaryModel[];
  fieldValues: IFieldValueModel[];
  specification: ISpecificationValueSummaryModel[];
  specificationValues: ISpecificationValueModel[];
  media: string[];
  mediaDetails: IMediaInfoModel[];
  inbound: IEntityDataModel[];
  outbound: IEntityDataModel[];
}

export interface ISetFieldSetModel {
  fieldSetId?: string;
  wipeOtherFields?: boolean;
}

export interface ISpecificationModel {
  entityId?: number;
  name?: string;
  categoryId?: string;
  value?: object;
  displayValue?: object;
  parentCvlId?: string;
  cvlId?: string;
  isMultiValue?: boolean;
  index?: number;
  isFormatted?: boolean;
  specificationFieldTypeId?: string;
  unit?: string;
  specificationDataType?: string;
  mandatory?: boolean;
  isHidden?: boolean;
  isReadOnly?: boolean;
}

export interface ISetSpecificationTemplateModel {
  specificationId?: number;
}

export interface ISetSegmentModel {
  segmentId: number;
}

export interface IEntityLinks {
  id?: number;
  isActive?: boolean;
  linkTypeId: string;
  sourceEntityId: number;
  targetEntityId: number;
  linkEntityId?: number;
  index?: number;
}

export interface IEntityBundleModel {
  summary?: IEntitySummaryModel;
  fields?: IFieldSummaryModel[];
  specification?: ISpecificationValueSummaryModel[];
  outbound?: IEntityBundleModel[];
  inbound?: IEntityBundleModel[];
  linkTypeId?: string;
  linkIndex?: number;
}

export interface ICommentsModel {
  id?: number;
  text: string;
  author?: string;
  createdDate?: string;
  formattedCreatedDate?: string;
  entityId?: number;
}

export interface IBase64FileModel {
  fileName: string;
  data: string;
}

export interface IUrlFileModel {
  fileName: string;
  overrideUrlFileName: string;
}

export interface IExternalUrlFileModel {
  url: string;
}
