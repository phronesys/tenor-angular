import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  apiKey: string = environment.API_KEY;
  constructor(private http: HttpClient) { }

  /* this can be refactored into a Model */
  gifAdapter(gif: any) {
    return {
      id: gif.id,
      description: gif.content_description,
      gifUrl: gif.media[0].gif.url,
      gifUrlTiny: gif.media[0].tinygif.url,
      tenorUrl: gif.url
    }
  }

  search(keyword: string): Observable<any> {
    const url: string = `https://g.tenor.com/v1/search?q=${keyword}&key=${this.apiKey}`;

    return this.http
      .get(url)
      .pipe(
        map(
          (res: any) => res.results.map((gif: any) => this.gifAdapter(gif))
        )
      );
  }
}
