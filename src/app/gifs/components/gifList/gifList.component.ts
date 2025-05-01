import { Component, input, signal } from '@angular/core';
import { ListItemComponent } from './listItem/listItem.component';
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'gif-list',
  templateUrl: './gifList.component.html',
  imports: [ListItemComponent],
})
export class GifListComponent {
  gifs = input.required<Gif[]>()
}
