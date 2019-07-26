import { IRequest,
  IModelModel,
  ILanguageModel,
  IFieldSet, ICVL,
  ICVLValueModel,
  ISpecificationTemplatesModel,
  ISpecificationTemplateModel
} from "../types";

import { AxiosPromise } from "axios";

export default class Model {
  private request: IRequest;

  constructor(request: IRequest) {
    this.request = request;
  }

  /**
   * Returns available entity types.
   * @param entityTypeIds : (optional), filter types using comma separated list.
   */
  public getEntityTypes(entityTypeIds?: string): AxiosPromise<IModelModel[]> {
    const requestUrl = entityTypeIds ?
    `model/entitytypes?entityTypeIds=${entityTypeIds}` :
    `model/entitytypes`;
    return this.request.getInstance().get(requestUrl);
  }

  /**
   * Returns available languages
   */
  public getLanguages(): AxiosPromise<ILanguageModel[]> {
    return this.request.getInstance().get("model/languages");
  }

  /**
   * Returns available field sets
   */
  public getFieldSets(): AxiosPromise<IFieldSet[]> {
    return this.request.getInstance().get("model/fieldsets");
  }

  /**
   * Returns all CVL's
   */
  public getCVLs(): AxiosPromise<ICVL[]> {
    return this.request.getInstance().get("model/cvls");
  }

  /**
   * Returns all values for a CVL
   * @param cvlId : The unique identifier of the CVL.
   */
  public getCVLValue(cvlId: string): AxiosPromise<ICVLValueModel[]> {
    return this.request.getInstance().get(`model/cvls/${cvlId}/values`);
  }

  /**
   * Create new CVL value.
   * @param cvlId : The unique identifier of the CVL.
   * @param CVL : The CVL data.
   */
  public CreateCVL(cvlId: string, CVLValue: ICVLValueModel ): AxiosPromise<ICVLValueModel> {
    return this.request.getInstance().post(`model/cvls/${cvlId}/values`, CVLValue);
  }

  /**
   * Delete CVL Value.
   * @param cvlId : The unique identifier of the CVL.
   * @param key : The key of the CVL value to delete.
   */
  public DeleteCVLValue(cvlId: string, key: string): AxiosPromise {
    return this.request.getInstance().delete(`model/cvls/${cvlId}/values/${key}`);
  }

  /**
   * Get CVL Value.
   * @param cvlId : The unique identifier of the CVL.
   * @param key : The key of the CVL value to get.
   */
  public GetCVLValue(cvlId: string, key: string): AxiosPromise<ICVLValueModel> {
    return this.request.getInstance().get(`model/cvls/${cvlId}/values/${key}`);
  }

  /**
   * Update CVL Value.
   * @param cvlId : The unique identifier of the CVL.
   * @param key : The key of the CVL value to update.
   */
  public UpdateCVLValue(cvlId: string, key: string, CVLValue: ICVLValueModel ): AxiosPromise<ICVLValueModel> {
    return this.request.getInstance().put(`model/cvls/${cvlId}/values/${key}`, CVLValue);
  }

  /**
   * Returns all specification templates.
   */
  public getSpecificationTemplates(): AxiosPromise<ISpecificationTemplatesModel[]> {
    return this.request.getInstance().get(`model/specificationtemplates`);
  }

  /**
   * Returns field types for specification template.
   * @param cvlId : The unique identifier of the Template.
   */

  public getFieldTypesSpecificationTemplates(templateId: string): AxiosPromise<ISpecificationTemplateModel[]> {
    return this.request.getInstance().get(`model/specificationtemplates/${templateId}/fieldtypes`);
  }
}
