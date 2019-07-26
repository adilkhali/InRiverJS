import { IRequest,
  IEntitySummaryModel,
  IEntityCreationModel,
  IMapUniqueValuesModel,
  IEntityModel,
  ISpecificationValueModel,
  IFieldValueModel,

} from "../types";

import { AxiosPromise } from "axios";

export default class Entity {
  private request: IRequest;

  constructor(request: IRequest) {
    this.request = request;
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
   * @param fieldTypeIds : (optional) filter types using comma separated list.
   */
  public SetFieldValues(entityId: number, fieldValueModels: IFieldValueModel[]): AxiosPromise<IFieldValueModel> {
    return this.request.getInstance().post(`entities/${entityId}/fieldvalues`, fieldValueModels);
  }
}
