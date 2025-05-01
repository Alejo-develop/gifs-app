import { Component, inject } from '@angular/core';
import { GifListComponent } from '../../components/gifList/gifList.component';
import { GiphyService } from '../../services/giphy.service';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent {
  gifsServices = inject(GiphyService);

  onSearch(query: string) {
    this.gifsServices.searchGifs(query);
  }
}
