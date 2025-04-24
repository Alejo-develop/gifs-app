import { Component } from "@angular/core";
import { MenuHeaderComponent } from "../menu-header/menu-header.component";
import { MenuOptionsComponent } from "../menu-options/menu-options.component";

@Component({
    selector: 'menu-component',
    templateUrl: './menu.component.html',
    imports: [MenuHeaderComponent, MenuOptionsComponent]
})
export class MenuComponent{}