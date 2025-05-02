import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import type { Gif } from '../interfaces/gif.interfaces';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GiphyService {
  private http = inject(HttpClient);
  constructor() {
    this.loadTrendingGifs();
  }

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal<boolean>(true);
  searchHistory = signal<Record<string, Gif[]>>({})
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()))

  loadTrendingGifs() {
    this.http
      .get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/trending`, {
        params: {
          api_key: environment.gifsApiKey,
          limit: 20,
        },
      })
      .subscribe((res) => {
        const gifs = GifMapper.mapGiphyArrayToGifArray(res.data);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
      });
  }

  searchGifs(query: string) {
    return this.http
      .get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/search`, {
        params: {
          api_key: environment.gifsApiKey,
          limit: 20,
          q: query,
        },
      })
      .pipe(
        map(({ data }) => data),
        map((items) => GifMapper.mapGiphyArrayToGifArray(items)),
      
        //History
        tap(items => {
          this.searchHistory.update((history) => ({
            ...history,
            [query.toLocaleLowerCase()]: items
          }))
        })
      );
    // .subscribe((res) => {
    //   const gifs = GifMapper.mapGiphyArrayToGifArray(res.data);
    //   console.log({ search: gifs });
    // });
  }
}
