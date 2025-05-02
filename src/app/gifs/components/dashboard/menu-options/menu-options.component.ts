import { Component, inject } from '@angular/core';
import { MenuOptionInterface } from '../../../interfaces/dashboard.interfaces';
import { MenuButtonComponent } from "../menu-button/menu-button.component";
import { GiphyService } from 'src/app/gifs/services/giphy.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'menu-options',
  templateUrl: './menu-options.component.html',
  imports: [MenuButtonComponent, RouterLink, RouterLinkActive],
})
export class MenuOptionsComponent {
  gifService = inject(GiphyService)

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
