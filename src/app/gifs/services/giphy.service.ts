import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import type { Gif } from '../interfaces/gif.interfaces';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({ providedIn: 'root' })
export class GiphyService {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal<boolean>(true);

  loadTrendingGifs() {
    this.http
      .get<GiphyResponse>(`${environment.giphyApiUrl} /gifs/trending`, {
        params: {
          api_Key: environment.gifsApiKey,
          limit: 20,
        },
      })
      .subscribe((res) => {
        const gifs = GifMapper.mapGiphyArrayToGifArray(res.data);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
      });
  }
}
