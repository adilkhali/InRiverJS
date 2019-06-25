import {IRequest} from '../types' ;


export class Channel {
    
    request: IRequest;

    constructor(request:IRequest){
        this.request = request ;
    }


    /**
     *
     * @param EntityId The unique identifier of the channel.
     */
    public getChannel (EntityId:string) {
        return this.request.getInstance().get(`channels?forEntityId=${EntityId}`);
    }

    public getAllChannels () {
        return this.request.getInstance().get('channels');
    }

}