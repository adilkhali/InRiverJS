import { IRequest,
  IBase64FileModelWithLink,
  IMediaInfoModel,
  IUrlFileModelWithLink,
  IExternalUrlFileModelWithLink } from "../types";
import { AxiosPromise } from "axios";

export default class Media {
  private request: IRequest;

  constructor(request: IRequest) {
    this.request = request;
  }

  /**
   * Upload base64 encoded file data. A resource entity will be created.
   * If the resourceLink object is omitted a resource entity will be created without a link.
   * If resourceLink.linkTypeId is omitted inRiver will automatically find the most suitable link type.
   */
  public UploadBase64(base64FileModel: IBase64FileModelWithLink): AxiosPromise<IMediaInfoModel> {
    return this.request.getInstance().post(`media:uploadbase64`, base64FileModel);
  }

  /**
   * Upload file data from url.
   * If overrideUrlFileName is omitted, the filename will equal the one supplied in the url. Set overrideUrlFileName to specifiy a file name.
   * If the resourceLink object is omitted a resource entity will be created without a link.
   * If resourceLink.linkTypeId is omitted inRiver will automatically find the most suitable link type.
   */
  public UploadFromUrl(urlFileModel: IUrlFileModelWithLink ): AxiosPromise<IMediaInfoModel> {
    return this.request.getInstance().post(`media:uploadfromurl`, urlFileModel);
  }

  /**
   * Add external media url.
   * If the resourceLink object is omitted a resource entity will be created without a link.
   * If resourceLink.linkTypeId is omitted inRiver will automatically find the most suitable link type
   */
  public AddExternalUrl(urlFileModel: IExternalUrlFileModelWithLink  ): AxiosPromise<IMediaInfoModel> {
    return this.request.getInstance().post(`media:addexternalurl`, urlFileModel);
  }
}
