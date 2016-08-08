import {User} from './user'
import {Photo} from './photo'


export class Comment{

    public commentId:number;
    public comment:string;

    public photo:Photo;
    public photoId:number;

    public userName: string;

}