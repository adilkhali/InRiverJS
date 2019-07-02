import Config from "./config";
import Channel from "./models/Channel";
import { IRequest } from "./types";
import Request from "./utils/request";

export default class InRiverAPIClient {
  private request: IRequest;
  private channel: Channel;

  constructor(  apiKey: string,
                apiRoot: string = "https://apieuw.productmarketingcloud.com",
                apiversion: string = "v1.0.0") {
    this.request = new Request(new Config(apiKey, apiRoot, apiversion));
  }

  public channels() {
    if (this.channel !== undefined) {
      return this.channel;
    }
    this.channel = new Channel(this.request);
    return this.channel;
  }
}
