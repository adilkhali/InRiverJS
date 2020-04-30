import Config from "./config";
import { Channel, Syndicate, Query, System, Media, Link, Workarea, Model, Entity} from "./models";
import { IRequest } from "./types";
import Request from "./utils/request";

export default class InRiverAPIClient {
  private request: IRequest;
  private InRiverChannel: Channel;
  private InRiverSyndicate: Syndicate;
  private InRiverCongifuration: System;
  private InRiverQuery: Query;
  private InRiverMedia: Media;
  private InRiverLink: Link;
  private InRiverWorkarea: Workarea;
  private InRiverModel: Model;
  private InRiverEntity: Entity;

  constructor(
    apiKey: string,
    apiRoot: string = "https://apieuw.productmarketingcloud.com",
    apiversion: string = "v1.0.0"
  ) {
    this.request = new Request(new Config(apiKey, apiRoot, apiversion));
  }

  public get Channel() {
    if (this.InRiverChannel !== undefined) {
      return this.InRiverChannel;
    }
    this.InRiverChannel = new Channel(this.request);
    return this.InRiverChannel;
  }

  public get Syndicates() {
    if (this.InRiverSyndicate !== undefined) {
      return this.InRiverSyndicate;
    }
    this.InRiverSyndicate = new Syndicate(this.request);
    return this.InRiverSyndicate;
  }

  public get Query() {
    if (this.InRiverQuery !== undefined) {
      return this.InRiverQuery;
    }
    this.InRiverQuery = new Query(this.request);
    return this.InRiverQuery;
  }

  public get System() {
    if (this.InRiverCongifuration !== undefined) {
      return this.InRiverCongifuration;
    }
    this.InRiverCongifuration = new System(this.request);
    return this.InRiverCongifuration;
  }

  public get Media() {
    if (this.InRiverMedia !== undefined) {
      return this.InRiverMedia;
    }
    this.InRiverMedia = new Media(this.request);
    return this.InRiverMedia;
  }

  public get Link() {
    if (this.InRiverLink !== undefined) {
      return this.InRiverLink;
    }
    this.InRiverLink = new Link(this.request);
    return this.InRiverLink;
  }

  public get Workarea() {
    if (this.InRiverWorkarea !== undefined) {
      return this.InRiverWorkarea;
    }
    this.InRiverWorkarea = new Workarea(this.request);
    return this.InRiverWorkarea;
  }

  public get Model() {
    if (this.InRiverModel !== undefined) {
      return this.InRiverModel;
    }
    this.InRiverModel = new Model(this.request);
    return this.InRiverModel;
  }

  public get Entities() {
    if (this.InRiverEntity !== undefined) {
      return this.InRiverEntity;
    }
    this.InRiverEntity = new Entity(this.request);
    return this.InRiverEntity;
  }
}
