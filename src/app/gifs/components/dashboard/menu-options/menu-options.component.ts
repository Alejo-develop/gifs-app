import { Component } from '@angular/core';
import { MenuOptionInterface } from '../../../interfaces/dashboard.interfaces';
import { MenuButtonComponent } from "../menu-button/menu-button.component";

@Component({
  selector: 'menu-options',
  templateUrl: './menu-options.component.html',
  imports: [MenuButtonComponent],
})
export class MenuOptionsComponent {
  options: MenuOptionInterface[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Popular gifs',
      route: '/dashboard/trending'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      subLabel: 'Search gifs',
      route: '/dashboard/search'
    }
  ];
}
