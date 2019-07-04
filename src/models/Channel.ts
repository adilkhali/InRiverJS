import {
  IRequest,
  IChannel,
  IEntityListModel,
  IEntityLink,
  IStructureEntities
} from "../types";
import { AxiosPromise } from "axios";

export default class Channel {
  private request: IRequest;

  constructor(request: IRequest) {
    this.request = request;
  }

  /**
   * Returns channel for an entity id
   * @param channelId The unique identifier of the channel.
   */
  public get(channelId: number): AxiosPromise<IChannel[]> {
    return this.request.getInstance().get(`channels?forEntityId=${channelId}`);
  }

  /**
   * Returns all channels
   */
  public getAll(): AxiosPromise<IChannel[]> {
    return this.request.getInstance().get("channels");
  }

  /**
   * Returns entity types for channel
   * @param channelId The unique identifier of the channel.
   */
  public getEntityTypes(channelId: number): AxiosPromise<string[]> {
    return this.request.getInstance().get(`channels/${channelId}/entitytypes`);
  }

  /**
   * Returns a list of entities in a channel
   * @param channelId The unique identifier of the Channel.
   */
  public getEntityList(channelId: number): AxiosPromise<IEntityListModel> {
    return this.request.getInstance().get(`channels/${channelId}/entitylist`);
  }

  /**
   * Returns a list of entity in a channel by Entity Type Id
   * @param channelId The unique identifier of the Channel.
   * @param entityTypeId The unique identifier of the Entity.
   */
  public getEntityTypeIdList( channelId: number, entityTypeId: number ): AxiosPromise<IEntityListModel> {
    return this.request.getInstance() .get(`channels/${channelId}/entitylist?entityTypeId=${entityTypeId}`);
  }

  /**
   * Returns entity inbound links
   * @param channelId The unique identifier of the Channel.
   * @param entityId The unique identifier of the Entity.
   */
  public getEntityOnboundLinks(channelId: number,entityId: number): AxiosPromise<IEntityLink[]> {
    return this.request.getInstance().get(`channels/${channelId}/entities/${entityId}/links?linkDirection=inbound`);
  }

  /**
   * Returns entity outbound links
   * @param channelId The unique identifier of the Channel.
   * @param entityId The unique identifier of the Entity.
   */
  public getEntityOutboundLinks(channelId: number,entityId: number): AxiosPromise<IEntityLink[]> {
    return this.request.getInstance().get(`channels/${channelId}/entities/${entityId}/links?linkDirection=outbound`);
  }

  /**
   * Returns all occurances of an entity in a channel
   * @param channelId The unique identifier of the Channel.
   * @param entityId The unique identifier of the Entity.
   */
  public getStructureEntities(channelId: number, entityId: number): AxiosPromise<IStructureEntities[]> {
    return this.request.getInstance().get(`channels/${channelId}/entities/${entityId}/structureentities`);
  }

  /**
   * Returns Channel structure list
   * @param channelId The unique identifier of the Channel.
   */
  public getStructureList(channelId: number): AxiosPromise<any[]> {
    return this.request.getInstance().get(`channels/${channelId}/nodes`);
  }

  /**
   * Returns Channel structure tree
   * @param channelId The unique identifier of the Channel.
   */
  public getStructureTree(channelId: number): AxiosPromise {
    return this.request.getInstance().get(`channels/${channelId}/nodetree`);
  }

  /**
   * Returns Channel path content
   * @param channelId The unique identifier of the Channel.
   */
  public getPathContent(path: string, entityTypeIds?: string): AxiosPromise {
    let requestUrl = `content/${path}`;
    if (entityTypeIds) {
      requestUrl += `?entityTypeIds=${entityTypeIds}`;
    }
    return this.request.getInstance().get(requestUrl);
  }
}
