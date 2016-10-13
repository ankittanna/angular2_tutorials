import {Injectable} from "@angular/core";
import {Character} from "../models/character"
import 'rxjs/add/operator/map'
import {Http, Response} from "@angular/http";
import { Observable } from "rxjs/observable"

@Injectable()
export class CharacterService {
    constructor(private _http: Http) {}

    getCharacters() {
        return this._http.get('app/api/characters.json')
            .map((response: Response) => <Character[]>response.json().data);
    }

    throwError(error: Response) {
        console.log(error);
    }


    /*getListOfArmors() {
        return this._http.get('http://myarmors.co.uk/list')
            .map((response: Response) => <Character[]>response.json().data);
    }*/
}