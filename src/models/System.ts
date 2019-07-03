import { IRequest, IImageConfiguration, IRoles, ISegments} from "../types";
import { AxiosPromise } from "axios";

export default class System {
  private request: IRequest;

  constructor(request: IRequest) {
    this.request = request;
  }

  /**
   * Returns available image configurations
   */
  public ImageConfigurations(): AxiosPromise<string[]> {
    return this.request.getInstance().post(`/system/imageconfigurations`);
  }

  /**
   * Return full details of available image configurations Response
   */
  public ImageConfigurationDetails(): AxiosPromise<IImageConfiguration> {
    return this.request.getInstance().post(`/system/imageconfigurationdetails`);
  }

  /**
   * Return a list of server settings
   */
  public AllServerSettings(): AxiosPromise {
    return this.request.getInstance().post(`/system/serversettings`);
  }

  /**
   * Return a list of server settings
   */
  public ServerSetting(settingNames: string): AxiosPromise {
    return this.request.getInstance().post(`/system/serversettings?settingNames=${settingNames}`);
  }

  /**
   * Return a list of user roles and permissions
   */
  public Roles(): AxiosPromise<IRoles[]> {
    return this.request.getInstance().post(`/system/roles`);
  }

  /**
   * Return a list of user roles and permissions for a specific user
   */
  public UserRoles(Username: string): AxiosPromise<IRoles[]> {
    return this.request.getInstance().post(`/system/roles?forUsername=${Username}`);
  }

  /**
   * Return a list of segments
   */
  public Segments(Username: string): AxiosPromise<ISegments[]> {
    return this.request.getInstance().post(`/system/segments?forUsername=${Username}`);
  }

  /**
   * Return a list of segments for a specific user
   */
  public UserSegments(Username: string): AxiosPromise<ISegments[]> {
    return this.request.getInstance().post(`/system/segments?forUsername=${Username}`);
  }

}
