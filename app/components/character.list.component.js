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
var character_service_1 = require("./character.service");
var my_character_component_1 = require("../components/my.character.component");
require('rxjs/add/operator/map');
var CharacterList = (function () {
    function CharacterList(_characterService) {
        var _this = this;
        this._characterService = _characterService;
        this._characterService.getCharacters()
            .subscribe(function (characters) { return _this.characters = characters; });
    }
    CharacterList.prototype.ngOnInit = function () {
        console.log('on init');
    };
    ;
    CharacterList.prototype.ngAfterViewInit = function () {
        console.log('after init');
    };
    ;
    CharacterList.prototype.select = function (selectedCharacter) {
        this.selectedCharacter = selectedCharacter;
        this.myChar.childMethod();
    };
    CharacterList.prototype.changed = function (event) {
        console.log('Hello! There is a change in the item.');
    };
    CharacterList.prototype.log = function (message) {
        console.log('----->' + message);
    };
    __decorate([
        core_1.ViewChild(my_character_component_1.MyCharacter), 
        __metadata('design:type', my_character_component_1.MyCharacter)
    ], CharacterList.prototype, "myChar", void 0);
    CharacterList = __decorate([
        core_1.Component({
            selector: 'character-list',
            templateUrl: 'app/components/character.list.component.html',
            providers: [character_service_1.CharacterService]
        }), 
        __metadata('design:paramtypes', [character_service_1.CharacterService])
    ], CharacterList);
    return CharacterList;
}());
exports.CharacterList = CharacterList;
//# sourceMappingURL=character.list.component.js.map