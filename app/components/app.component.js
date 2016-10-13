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
var router_config_loader_1 = require("@angular/router/src/router_config_loader");
var character_list_component_1 = require("./character.list.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        router_config_loader_1.RouterConfigLoader([
            {
                path: '/',
                name: 'Characters',
                component: character_list_component_1.CharacterList,
                useAsDefault: true
            }
        ]),
        core_1.Component({
            selector: 'my-app',
            template: '<h2>Hello World!</h2>',
            providers: [character_service_1.CharacterService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map