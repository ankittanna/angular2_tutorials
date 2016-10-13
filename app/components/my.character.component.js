"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var character_1 = require("../models/character");
var MyCharacter = (function () {
    function MyCharacter() {
        this.changed = new core_1.EventEmitter();
        this.colour = '#CCC';
        this.vehicleDetails = {
            name: 'BMW',
            model: 'i8',
            colour: 'Black',
            image: 'http://media.caranddriver.com/images/media/331369/all-about-the-batteries-baby-2015-bmw-i8-battery-pack-dictated-its-entire-design-photo-594003-s-450x274.jpg',
            url: 'http://www.bmw.co.uk/en_GB/new-vehicles/bmw-i/i8/2013/introduction.html'
        };
    }
    MyCharacter.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy for ${this.selectedCharacter.name}');
    };
    ;
    MyCharacter.prototype.select = function (selectedCharacter) {
        this.selectedCharacter = selectedCharacter;
        this.changed.emit(selectedCharacter);
    };
    ;
    MyCharacter.prototype.childMethod = function () {
        console.log('This method is called from the parent component via ViewChild');
    };
    ;
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MyCharacter.prototype, "changed", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', character_1.Character)
    ], MyCharacter.prototype, "character", void 0);
    MyCharacter = __decorate([
        core_1.Component({
            selector: 'my-character',
            templateUrl: 'app/components/my.character.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MyCharacter);
    return MyCharacter;
}());
exports.MyCharacter = MyCharacter;
//# sourceMappingURL=my.character.component.js.map