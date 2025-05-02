import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from '../../components/gifList/gifList.component';
import { GiphyService } from '../../services/giphy.service';
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent {
  gifsServices = inject(GiphyService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    this.gifsServices.searchGifs(query).subscribe((res) => {
      this.gifs.set(res);
    });
  }
}
