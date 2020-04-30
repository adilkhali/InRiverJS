import { IRequest } from "../types";
import { AxiosPromise } from "axios";

export default class Query {
  private request: IRequest;

  constructor(request: IRequest) {
    this.request = request;
  }

  /**
   * Search for entity id's
   */
  public search(queryJSON: any): AxiosPromise {
    return this.request.getInstance().post(`query`, queryJSON);
  }
}
