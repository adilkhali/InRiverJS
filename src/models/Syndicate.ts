import { IRequest, ISyndications } from "../types";
import { AxiosPromise } from "axios";

export default class Syndicate {
  private request: IRequest;

  constructor(request: IRequest) {
    this.request = request;
  }

  /**
   * Returns all Syndications
   */
  public getAll(): AxiosPromise<ISyndications[]> {
    return this.request.getInstance().get(`syndications`);
  }

  /**
   * Run Syndications
   * @param syndicationId The unique identifier of the Syndications.
   */
  public run(syndicationId: number): AxiosPromise {
    return this.request.getInstance().post(`syndications/${syndicationId}:run`);
  }
}
