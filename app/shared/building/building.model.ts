import {Contact} from "./contact.model"
import { map } from 'rxjs/operators';

export class Building {
    id?: string;
    name?: string;
    image?:string;
    address?:string;
    contacts?:Contact[];
    constructor( id?: string,name?: string,image?:string,address?:string,contacts?:Contact[]) {
        this.id=id;
        this.name=name;
        this.image=image;
        this.address=address;
        this.contacts=contacts;
    }
  }