import { IRequest, ILinkModel } from "../types";
import { AxiosPromise } from "axios";

export default class Link {
  private request: IRequest;

  constructor(request: IRequest) {
    this.request = request;
  }

  /**
   * Delete link.
   */
  public Delete(linkId: number): AxiosPromise {
    return this.request.getInstance().delete(`links/${linkId}`);
  }

  /**
   * Returns a link
   */
  public GetLink(linkId: number): AxiosPromise<ILinkModel> {
    return this.request.getInstance().get(`links/${linkId}`);
  }

  /**
   * Create a new link
   */
  public Create(linkModel: ILinkModel): AxiosPromise<ILinkModel> {
    return this.request.getInstance().post(`links`, linkModel);
  }

  /**
   * Update sort order of links
   */
  public Update(linkModels: ILinkModel[]): AxiosPromise<ILinkModel[]> {
    return this.request.getInstance().put(`links/sortorder`, linkModels);
  }

}
