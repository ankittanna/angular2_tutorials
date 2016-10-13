import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Character } from '../models/character';
import { CharacterService } from "./character.service"
import { MyCharacter } from "../components/my.character.component";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Component({
    selector: 'character-list',
    templateUrl: 'app/components/character.list.component.html',
    providers: [ CharacterService ]
})
export class CharacterList implements AfterViewInit{
    selectedCharacter: Character;

    @ViewChild(MyCharacter) myChar:MyCharacter;

    ngOnInit() {
      console.log('on init');
    };

    ngAfterViewInit() {
        console.log('after init');
    };

    constructor(private _characterService: CharacterService) {
        this._characterService.getCharacters()
            .subscribe(
                characters => this.characters = characters
            );
    }

    characters: Character[];

    select(selectedCharacter: Character) {
        this.selectedCharacter = selectedCharacter;
        this.myChar.childMethod();
    }

    changed (event: any) {
        console.log('Hello! There is a change in the item.');
    }

    log(message: string) {
        console.log('----->' + message)
    }
}