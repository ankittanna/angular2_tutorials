import {Component, Input, Output, EventEmitter, OnInit, OnChanges, AfterViewInit, OnDestroy} from '@angular/core';
import {Character} from "../models/character";

@Component({
    selector: 'my-character',
    templateUrl: 'app/components/my.character.component.html'
})
export class MyCharacter {
    @Output() changed: EventEmitter<any> = new EventEmitter();
    @Input() character: Character;

    ngOnDestroy() {
        console.log('ngOnDestroy for ${this.selectedCharacter.name}')
    };

    selectedCharacter: Character;

    select(selectedCharacter: Character) {
        this.selectedCharacter = selectedCharacter;
        this.changed.emit(selectedCharacter);
    };

    childMethod() {
        console.log('This method is called from the parent component via ViewChild');
    };
    colour = '#CCC';
    vehicleDetails = {
        name: 'BMW',
        model: 'i8',
        colour: 'Black',
        image: 'http://media.caranddriver.com/images/media/331369/all-about-the-batteries-baby-2015-bmw-i8-battery-pack-dictated-its-entire-design-photo-594003-s-450x274.jpg',
        url: 'http://www.bmw.co.uk/en_GB/new-vehicles/bmw-i/i8/2013/introduction.html'
    };
}