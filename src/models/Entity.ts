import {
  IRequest,
  IEntitySummaryModel,
  IEntityCreationModel,
  IMapUniqueValuesModel,
  IEntityModel,
  ISpecificationValueModel,
  IFieldValueModel,
  IFetchObjectsModel,
  ISummaryModel,
  ISetFieldSetModel,
  ISpecificationModel,
  ISetSpecificationTemplateModel,
  ISetSegmentModel,
  IEntityLinks,
  IEntityBundleModel,
  IMediaInfoModel,
  ICommentsModel,
  ISegments,
  IBase64FileModel,
  IUrlFileModel,
  IExternalUrlFileModel
} from "../types";

import { AxiosPromise } from "axios";
export default class Entity {
  private request: IRequest;

  constructor(request: IRequest) {
    this.request = request;
  }

  /**
   * Returns various types of entity data.
   * Fetch data for a list of entity id's and specify what data to include.
   * Available objects (EntitySummary, FieldsSummary, FieldValues, SpecificationSummary, SpecificationValues, Media, MediaDetails)
   * @param entityCreationModel :Entity Creation Model.
   */
  public FetchData(fetchObjectsModel: IFetchObjectsModel): AxiosPromise<ISummaryModel[]> {
    return this.request.getInstance().post(`entities:fetchdata`, fetchObjectsModel);
  }

  /**
   * Returns a read only entity summary
   * @param entityId : The unique identifier of the entity.
   */
  public GetEntitySummary(entityId: number): AxiosPromise<IEntitySummaryModel> {
    return this.request.getInstance().get(`entities/${entityId}/summary`);
  }

  /**
   * Delete an entity
   * @param entityId :The unique identifier of the entity.
   */
  public DeleteEntity(entityId: number): AxiosPromise {
    return this.request.getInstance().delete(`entities/${entityId}`);
  }

  /**
   * Create a new entity
   * @param entityCreationModel :Entity Creation Model.
   */
  public CreateEntity(entityCreationModel: IEntityCreationModel): AxiosPromise<IEntitySummaryModel> {
    return this.request.getInstance().post(`entities:createnew`, entityCreationModel);
  }

  /**
   * Returns an entity creation model Implementation Notes
   * @param entityTypeId : The unique identifier of the entity.
   * @param fieldSetId : (optional) fieldSetId.
   * @param allFields :  (optional) include all fields (not included in a field set).
   */
  public GetEmptyModel(entityTypeId: string, fieldSetId?: string, allFields?: boolean)
    : AxiosPromise<IEntityCreationModel> {
    let requestUrl = `entities:getempty?entityTypeId=${entityTypeId}`;
    if (fieldSetId) { requestUrl += `fieldSetId=${fieldSetId}`; }
    if (allFields != null) { requestUrl += `allFields=${fieldSetId}`; }
    return this.request.getInstance().get(requestUrl);
  }

  /**
   * Returns a dictionary of unique values and entity id's
   * @param mapUniqueValuesModel : Mapping Model.
   */
  public MapUniqueValues(mapUniqueValuesModel: IMapUniqueValuesModel): AxiosPromise {
    return this.request.getInstance().post(`entities:mapuniquevalues`, mapUniqueValuesModel);
  }

  /**
   * Returns the completeness details of an entity
   * @param entityId : The unique identifier of the entity.
   */
  public CompletenessDetails(entityId: number): AxiosPromise<IEntityModel[]> {
    return this.request.getInstance().get(`entities/${entityId}/completenessdetails`);
  }

  /**
   * Returns a read only list of field values
   * @param entityId : The unique identifier of the entity.
   * @param fieldTypeIds : (optional) fieldTypeIds.
   */
  public GetFields(entityId: number, fieldTypeIds?: string): AxiosPromise<IEntityModel[]> {
    const requestUrl = fieldTypeIds ?
      `entities/${entityId}/summary/fields?fieldTypeIds=${fieldTypeIds}` :
      `entities/${entityId}/summary/fields`;
    return this.request.getInstance().get(requestUrl);
  }

  /**
   * Returns a list of specification field values
   * @param entityTypeId : The unique identifier of the entity.
   * @param specificationFieldTypeIds : (optional).
   * @param mandatoryOnly :  (optional).
   */
  public GetSpecificationValues(entityTypeId: string, specificationFieldTypeIds?: string, mandatoryOnly?: boolean)
    : AxiosPromise<ISpecificationValueModel[]> {
    let requestUrl = `entities/${entityTypeId}/specificationvalues`;
    if (specificationFieldTypeIds) { requestUrl += `specificationFieldTypeIds=${specificationFieldTypeIds}`; }
    if (mandatoryOnly != null) { requestUrl += `mandatoryOnly=${mandatoryOnly}`; }
    return this.request.getInstance().get(requestUrl);
  }

  /**
   * Update specification field values
   * @param entityTypeId : The unique identifier of the entity.
   * @param specificationFieldValue : specification field values model.
   */
  public UpdateSpecificationValue(entityTypeId: string, specificationFieldValue: ISpecificationValueModel)
    : AxiosPromise<ISpecificationValueModel[]> {
    return this.request.getInstance().post(`entities/${entityTypeId}/specificationvalues`, specificationFieldValue);
  }

  /**
   * Returns a list of field values
   * @param entityId : The unique identifier of the entity.
   * @param fieldTypeIds : (optional) filter types using comma separated list.
   */
  public GetFieldValues(entityId: number, fieldTypeIds?: string): AxiosPromise<IFieldValueModel> {
    const requestUrl = fieldTypeIds ?
      `entities/${entityId}/fieldvalues?fieldTypeIds=${fieldTypeIds}` :
      `entities/${entityId}/fieldvalues`;
    return this.request.getInstance().get(requestUrl);
  }

  /**
   * Update field values
   * @param entityId : The unique identifier of the entity.
   * @param fieldValueModels : (optional) filter types using comma separated list.
   */
  public SetFieldValues(entityId: number, fieldValueModels: IFieldValueModel[]): AxiosPromise<IFieldValueModel> {
    return this.request.getInstance().post(`entities/${entityId}/fieldvalues`, fieldValueModels);
  }

  /**
   * Returns Field value revisions
   * @param entityId : The unique identifier of the entity.
   * @param fieldTypeId : Field Type Id.
   */
  public GetFieldrevisions(entityId: number, fieldTypeId: string): AxiosPromise<IEntitySummaryModel> {
    const requestUrl = `entities/${entityId}/fieldvalues/${fieldTypeId}/revisions`;
    return this.request.getInstance().get(requestUrl);
  }

  /**
   * Set field set
   * @param entityId : The unique identifier of the entity.
   * @param setFieldSetModel : Field set Model
   */
  public SetFieldSet(entityId: number, setFieldSetModel: ISetFieldSetModel): AxiosPromise<IEntitySummaryModel> {
    const requestUrl = `entities/${entityId}/fieldset`;
    return this.request.getInstance().put(requestUrl, setFieldSetModel);
  }

  /**
   * Returns a read only list of specification field values
   * @param entityId : The unique identifier of the entity.
   * @param specificationFieldTypeIds : (optional) filter types using comma separated list.
   */
  public GetSpecificationFieldValues(entityId: number, specificationFieldTypeIds: string): AxiosPromise<ISpecificationModel[]> {
    const requestUrl = `entities/${entityId}/summary/specification?specificationFieldTypeIds=${specificationFieldTypeIds}`;
    return this.request.getInstance().get(requestUrl);
  }

  /**
   * Set specification template
   * @param entityId : The unique identifier of the entity.
   * @param setSpecificationTemplateModel : Specification Template Model
   */
  public SetSpecificationtemplate(entityId: number, setSpecificationTemplateModel: ISetSpecificationTemplateModel): AxiosPromise<IEntitySummaryModel> {
    const requestUrl = `entities/{entityId}/specificationtemplate`;
    return this.request.getInstance().put(requestUrl, setSpecificationTemplateModel);
  }

  /**
   * Set specification template
   * @param entityId : The unique identifier of the entity.
   * @param setSegmentModel : Segment Model .
   */
  public SetEntitySegment(entityId: number, setSegmentModel: ISetSegmentModel): AxiosPromise<IEntitySummaryModel> {
    const requestUrl = `entities/{entityId}/specificationtemplate`;
    return this.request.getInstance().put(requestUrl, setSegmentModel);
  }

  /**
   * Returns a list of links
   * @param entityId : The unique identifier of the entity.
   * @param linkDirection : link direction "inbound" or "outbound" .
   * @param linkTypeId : filter by link type.
   */
  public GetLinks(entityId: number, linkDirection?: "inbound" | "outbound", linkTypeId?: string): AxiosPromise<IEntityLinks[]> {
    const requestUrl = `entities/${entityId}/links`;
    return this.request.getInstance().get(requestUrl, {
      params: {
        linkDirection,
        linkTypeId
      }
    });
  }

  /**
   * Returns a bundle of the entity and all linked entities
   * @param entityId : The unique identifier of the entity.
   * @param fieldTypeIds : filter field types using comma separated list.
   * @param linkDirection : link direction "inbound" or "outbound".
   * @param linkTypeId : filter by link type.
   */
  public GetLinksAndFields(entityId: number, fieldTypeIds?: string, linkDirection?: "inbound" | "outbound", linkTypeId?: string): AxiosPromise<IEntityBundleModel> {
    const requestUrl = `entities/${entityId}/linksandfields`;
    return this.request.getInstance().get(requestUrl, {
      params: {
        fieldTypeIds,
        linkDirection,
        linkTypeId
      }
    });
  }

  /**
   * Returns a read only list of entity media
   * @param entityId : The unique identifier of the entity.
   */
  public GetMedia(entityId: number): AxiosPromise<Array<IMediaInfoModel | string>> {
    const requestUrl = `entities/${entityId}/media`;
    return this.request.getInstance().get(requestUrl);
  }

  /**
   * Returns a read only list of entity media details
   * @param entityId : The unique identifier of the entity.
   */
  public GetMediaDetails(entityId: number): AxiosPromise<IMediaInfoModel[]> {
    const requestUrl = `entities/${entityId}/mediadetails`;
    return this.request.getInstance().get(requestUrl);
  }

  /**
   * Returns a read only list of entity comments
   * @param entityId : The unique identifier of the entity.
   */
  public GetComments(entityId: number): AxiosPromise<ICommentsModel[]> {
    const requestUrl = `entities/${entityId}/comments`;
    return this.request.getInstance().get(requestUrl);
  }

  /**
   * Post entity comments
   * @param entityId : The unique identifier of the entity.
   * @param commentModel : Comment to be added.
   */
  public PostComment(entityId: number, commentModel: ICommentsModel): AxiosPromise<ICommentsModel[]> {
    const requestUrl = `entities/${entityId}/comments`;
    return this.request.getInstance().post(requestUrl, commentModel);
  }

  /**
   * Delete entity comment
   * @param entityId : The unique identifier of the entity.
   * @param commentId : The unique identifier of the comment.
   */
  public DeletComment(entityId: number, commentId: number): AxiosPromise<object> {
    const requestUrl = `entities/${entityId}/comments/${commentId}`;
    return this.request.getInstance().delete(requestUrl);
  }

  /**
   * Get list of starred entities
   */
  public GetStarredEntities(): AxiosPromise<number[]> {
    const requestUrl = `entities/starred`;
    return this.request.getInstance().get(requestUrl);
  }

  /**
   * Upldate list of stared entities.
   * @param entityIds : The unique identifier of the entites to be stared.
   */
  public PutStarredEntities(entityIds: number[]): AxiosPromise<number[]> {
    const requestUrl = `entities/starred`;
    return this.request.getInstance().put(requestUrl, entityIds);
  }

  /**
   * Get all Segements
   */
  public GetAllSegements(): AxiosPromise<ISegments[]> {
    const requestUrl = `entities/segments`;
    return this.request.getInstance().get(requestUrl);
  }

  /**
   * Add media to an entity using base64
   * @param entityId : The unique identifier of the entity.
   * @param base64FileModel : file name and Data
   */
  public AddMediaBase64(entityId: number, base64FileModel: IBase64FileModel): AxiosPromise<IMediaInfoModel[]> {
    const requestUrl = `entities/${entityId}/media:uploadbase64`;
    return this.request.getInstance().post(requestUrl, base64FileModel);
  }

  /**
   * Add media to an entity using URL
   * @param entityId : The unique identifier of the entity.
   * @param urlFileModel : file name and Data
   */
  public AddMediaFromUrl(entityId: number, urlFileModel: IUrlFileModel): AxiosPromise<IMediaInfoModel[]> {
    const requestUrl = `entities/${entityId}/media:uploadfromurl`;
    return this.request.getInstance().post(requestUrl, urlFileModel);
  }

  /**
   * Add media to an entity using external URL
   * @param entityId : The unique identifier of the entity.
   * @param externalUrlFileModel : file name and Data
   */
  public AddMediaFromExternalUrl(entityId: number, externalUrlFileModel: IExternalUrlFileModel): AxiosPromise<IMediaInfoModel[]> {
    const requestUrl = `entities/${entityId}/media:addexternalurl`;
    return this.request.getInstance().post(requestUrl, externalUrlFileModel);
  }
}
