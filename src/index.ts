import Config from "./config";
import { Channel, Syndicate, Query } from "./models";
import { IRequest } from "./types";
import Request from "./utils/request";

export default class InRiverAPIClient {
  private request: IRequest;
  private channel: Channel;
  private syndicate: Syndicate;
  private query: Query;

  constructor(
    apiKey: string,
    apiRoot: string = "https://apieuw.productmarketingcloud.com",
    apiversion: string = "v1.0.0"
  ) {
    this.request = new Request(new Config(apiKey, apiRoot, apiversion));
  }

  public get channels() {
    if (this.channel !== undefined) {
      return this.channel;
    }
    this.channel = new Channel(this.request);
    return this.channel;
  }

  public get syndicates() {
    if (this.syndicate !== undefined) {
      return this.syndicate;
    }
    this.syndicate = new Syndicate(this.request);
    return this.syndicate;
  }

  public get queries() {
    if (this.query !== undefined) {
      return this.query;
    }
    this.query = new Query(this.request);
    return this.query;
  }
}
