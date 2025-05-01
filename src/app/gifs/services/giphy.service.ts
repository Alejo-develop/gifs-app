import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';

@Injectable({ providedIn: 'root' })
export class GiphyService {
  private http = inject(HttpClient);

  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.giphyApiUrl} /gifs/trending`, {
      params: {
        api_Key: environment.gifsApiKey,
        limit: 20,
      },
    });
  }
}
