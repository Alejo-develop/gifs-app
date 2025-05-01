import { Component, inject } from '@angular/core';
import { GifListComponent } from '../../components/gifList/gifList.component';
import { GiphyService } from '../../services/giphy.service';

@Component({
  selector: 'app-trending',
  imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent {
  gifsServices = inject(GiphyService );
}
