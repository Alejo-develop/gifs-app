import { Component, input } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './listItem.component.html',
})
export class ListItemComponent {
  img = input.required<string>()
}
