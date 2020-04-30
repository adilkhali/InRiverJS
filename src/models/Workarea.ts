import { IRequest,
  IWorkAreaFolderModel,
  IWorkAreaTreeFolderModel,
  IEntityListModel,
  IWorkAreaCreationModel} from "../types";
import { AxiosPromise } from "axios";

export default class Workarea {
  private request: IRequest;

  constructor(request: IRequest) {
    this.request = request;
  }

  /**
   * Returns workarea folders created by me
   */
  public WorkareaCreatedByMe(includeShared?: boolean): AxiosPromise<IWorkAreaFolderModel []> {
    const requestUrl = includeShared ?
    `workareafolders?includeCreatedByMe=true&includeShared=${includeShared}` :
    `workareafolders?includeCreatedByMe=true`;
    return this.request.getInstance().get(requestUrl);
  }

  /**
   * Returns workarea folders created by other users
   */
  public WorkareaNotCreatedByMe(includeShared?: boolean): AxiosPromise<IWorkAreaFolderModel []> {
    const requestUrl = includeShared ?
    `workareafolders?includeCreatedByMe=false&includeShared=${includeShared}` :
    `workareafolders?includeCreatedByMe=false`;
    return this.request.getInstance().get(requestUrl);
  }

  /**
   * Returns workarea folders created by a specific user
   */
  public WorkareaCreatedBy(Username: string, includeShared?: boolean): AxiosPromise<IWorkAreaFolderModel []> {
    const requestUrl = includeShared ?
    `workareafolders?forUsername=${Username}&includeShared=${includeShared}` :
    `workareafolders?forUsername=${Username}`;
    return this.request.getInstance().get(requestUrl);
  }

  /**
   * Returns workarea folder tree created by me
   */
  public WorkareaTreeCreatedByMe(includeShared?: boolean): AxiosPromise<IWorkAreaTreeFolderModel[]> {
    const requestUrl = includeShared ?
    `workareafoldertree?includeCreatedByMe=true&includeShared=${includeShared}` :
    `workareafoldertree?includeCreatedByMe=true`;
    return this.request.getInstance().get(requestUrl);
  }

  /**
   * Returns workarea folder tree created by other users
   */
  public WorkareaTreeNotCreatedByMe(includeShared?: boolean): AxiosPromise<IWorkAreaTreeFolderModel[]> {
    const requestUrl = includeShared ?
    `workareafoldertree?includeCreatedByMe=false&includeShared=${includeShared}` :
    `workareafoldertree?includeCreatedByMe=false`;
    return this.request.getInstance().get(requestUrl);
  }

  /**
   * Returns workarea folder tree created by a specific user
   */
  public WorkareaTreeNotCreatedBy(Username: string, includeShared?: boolean): AxiosPromise<IWorkAreaTreeFolderModel[]> {
    const requestUrl = includeShared ?
    `workareafoldertree?forUsername=${Username}&includeShared=${includeShared}` :
    `workareafoldertree?forUsername=${Username}`;
    return this.request.getInstance().get(requestUrl);
  }

  /**
   * Returns an entity list for any type of workarea
   */
  public WorkareaEntities(workareaFolderId: string): AxiosPromise<IEntityListModel> {
    return this.request.getInstance().get(`workareafolder/${workareaFolderId}/entitylist`);
  }

  /**
   * Update workarea query
   */
  public UpdateWorkarea(workareaFolderId: number, queryModel: any): AxiosPromise<IWorkAreaFolderModel> {
    return this.request.getInstance().put(`workareafolder/${workareaFolderId}/query`, queryModel);
  }

  /**
   * Returns entity id's in a static workarea
   */
  public GetWorkareaEntityIDs(workareaFolderId: string): AxiosPromise<number[]> {
    return this.request.getInstance().get(`workareafolder/${workareaFolderId}/entityIds`);
  }

  /**
   * Set entity id's in a static workarea
   */
  public SetWorkareaEntityIDs(workareaFolderId: string, entityIds: number[]): AxiosPromise<number[]> {
    return this.request.getInstance().put(`workareafolder/${workareaFolderId}/entityIds`, JSON.stringify(entityIds));
  }

  /**
   * Delete workarea folder
   */
  public DeleteWorkareaFolder(workareaFolderId: string): AxiosPromise {
    return this.request.getInstance().delete(`workareafolder/${workareaFolderId}`);
  }

  /**
   * Update workarea folder
   */
  public UpdateWorkareaFolder(workareaFolderId: string,
                              workareaFolderModel: IWorkAreaFolderModel): AxiosPromise<IWorkAreaFolderModel> {
    return this.request.getInstance().put(`workareafolder/${workareaFolderId}`, workareaFolderModel);
  }

  /**
   * Create a new workarea
   */
  public CreateWorkareaFolder(workareaFolderId: string,
                              workareaCreationModel: IWorkAreaCreationModel ): AxiosPromise<IWorkAreaFolderModel> {
    return this.request.getInstance().put(`workareafolder:createnew`, workareaCreationModel);
  }
}
