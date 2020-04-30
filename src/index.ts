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
    this.InRiverChannel = new Channel(this.request);
    this.InRiverSyndicate = new Syndicate(this.request);
    this.InRiverQuery = new Query(this.request);
    this.InRiverCongifuration = new System(this.request);
    this.InRiverMedia = new Media(this.request);
    this.InRiverLink = new Link(this.request);
    this.InRiverWorkarea = new Workarea(this.request);
    this.InRiverModel = new Model(this.request);
    this.InRiverEntity = new Entity(this.request);
  }

  public get Channel() {
    return this.InRiverChannel;
  }

  public get Syndicates() {
    return this.InRiverSyndicate;
  }

  public get Query() {
    return this.InRiverQuery;
  }

  public get System() {
    return this.InRiverCongifuration;
  }

  public get Media() {
    return this.InRiverMedia;
  }

  public get Link() {
    return this.InRiverLink;
  }

  public get Workarea() {
    return this.InRiverWorkarea;
  }

  public get Model() {

    return this.InRiverModel;
  }

  public get Entities() {
    return this.InRiverEntity;
  }
}
