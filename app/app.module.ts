import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./components/app.component";
import {CharacterList} from "./components/character.list.component";
import {MyCharacter} from "./components/my.character.component";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, CharacterList, MyCharacter],
    bootstrap: [ CharacterList ]
})
export class AppModule {};