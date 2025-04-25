import { Component } from "@angular/core";
import { environment } from "@environments/environment";

@Component({
    selector: 'menu-header',
    templateUrl: './menu-header.component.html'
})
export class MenuHeaderComponent{
    envs = environment
}