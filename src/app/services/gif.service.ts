import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Gif } from './Gif';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  apiKey: string = environment.API_KEY;
  constructor(private http: HttpClient) { }

  /* this can be refactored into a Model */
  private gifAdapter(gif: any) {
    return {
      id: gif.id,
      description: gif.content_description,
      gifUrl: gif.media[0].gif.url,
      gifUrlTiny: gif.media[0].tinygif.url,
      tenorUrl: gif.url
    }
  }
  autocomplete(keyword: string): Observable<Array<string>> {
    const url: string = `https://g.tenor.com/v1/autocomplete?q=${keyword}&key=${this.apiKey}&limit=3`
    return this.http
      .get(url)
      .pipe(
        map(
          (response: any) => response.results
        )
      )
  }

  search(keyword: string): Observable<Gif[]> {
    const url: string = `https://g.tenor.com/v1/search?q=${keyword}&key=${this.apiKey}&limit=40`;

    return this.http
      .get(url)
      .pipe(
        map(
          (response: any) => {
            return response.results.map((gif: any) => this.gifAdapter(gif))
          }
        )
      );
  }
}
