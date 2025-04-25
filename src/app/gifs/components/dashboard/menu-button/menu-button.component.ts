import { Component, input } from '@angular/core';
import { MenuOptionInterface } from '../../../interfaces/dashboard.interfaces';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'menu-button',
  templateUrl: './menu-button.component.html',
  imports: [RouterLink, RouterLinkActive]
})
export class MenuButtonComponent {
    option =  input.required<MenuOptionInterface>()
}
