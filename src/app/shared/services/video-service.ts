import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private apiUrl = environment.apiUrl + '/videos';
  private apiUrlAdmin = environment.apiUrl + '/videos/admin';

  constructor(private http: HttpClient) {}

  getAllAdminVideos(page: number, size: number, search?: string) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    if (search) {
      params = params.set('search', search);
    }
    return this.http.get(`${this.apiUrlAdmin}/all`, { params });
  }

  createVideoByAdmin(data: any) {
    return this.http.post(this.apiUrlAdmin, data);
  }

  updateVideoByAdmin(id: string | number, patch: any) {
    return this.http.put(`${this.apiUrlAdmin}/${id}`, patch);
  }

  deleteVideoByAdmin(id: string | number) {
    return this.http.delete(`${this.apiUrlAdmin}/${id}`);
  }

  setPublishedByAdmin(id: string | number, published: boolean) {
    return this.http.patch(`${this.apiUrlAdmin}/${id}/published`, {
      published,
    });
  }

  getStatusByAdmin() {
    return this.http.get(`${this.apiUrlAdmin}/status`);
  }

  getPublicVideosPaginated(page: number, size: number, search?: string) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    if (search) {
      params = params.set('search', search);
    }
    return this.http.get(`${this.apiUrl}/paginated`, { params });
  }

  getFeaturedVideos() {
    return this.http.get(`${this.apiUrl}/featured`);
  }
}
