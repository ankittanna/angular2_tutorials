import { Component } from '@angular/core';
import { CharacterService } from "./character.service";
import {RouterConfigLoader} from "@angular/router/src/router_config_loader";
import {CharacterList} from "./character.list.component";

@RouterConfigLoader([
    {
        path: '/',
        name: 'Characters',
        component: CharacterList,
        useAsDefault: true
    }
])

@Component({
    selector: 'my-app',
    template: '<h2>Hello World!</h2>',
    providers: [ CharacterService ]
})
export class AppComponent {

}