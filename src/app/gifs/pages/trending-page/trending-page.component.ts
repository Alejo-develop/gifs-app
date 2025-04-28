import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifListComponent } from '../../components/gifList/gifList.component';

@Component({
  selector: 'app-trending',
  imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent { }
