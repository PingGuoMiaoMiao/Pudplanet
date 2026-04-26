import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  private apiUrl = environment.apiUrl + '/watchlist';

  constructor(private http: HttpClient) {}

  getWatchlist(page:number=0,size:number=10,search?:string) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    if (search) {
      params = params.set('search', search);
    }
    return this.http.get(this.apiUrl, { params });
  }

  addToWatchlist(videoId: number | string) {
    return this.http.post(this.apiUrl + '/' + videoId, {});
  }

  removeFromWatchlist(videoId: number | string) {
    return this.http.delete(this.apiUrl + '/' + videoId);
  }
}
