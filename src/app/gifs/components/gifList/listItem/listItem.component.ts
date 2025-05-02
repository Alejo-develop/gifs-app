import { Component, input } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gif.interfaces';

@Component({
  selector: 'list-item',
  templateUrl: './listItem.component.html',
})
export class ListItemComponent {
  gif = input.required<Gif>()
}
