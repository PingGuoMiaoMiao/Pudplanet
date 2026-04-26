import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpEvent,
} from '@angular/common/http';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private apiUrl = environment.apiUrl + '/files';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  uploadFile(file: File): Observable<{ progress: number; uuid?: string }> {
    const formData = new FormData();
    formData.append('file', file);

    const isVideo = file.type.startsWith('video/');
    const endpoint = isVideo ? '/upload-video' : '/upload-image';
    const uploadUrl = `${this.apiUrl}${endpoint}`;

    const req = new HttpRequest('POST', uploadUrl, formData, {
      reportProgress: true,
    });

    return this.http.request(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event.type === HttpEventType.UploadProgress) {
          const progress = Math.round(
            (100 * (event as any).loaded) / ((event as any).total || 1)
          );
          return { progress };
        } else if (event.type === HttpEventType.Response) {
          const body = event.body as any;
          return { progress: 100, uuid: body?.uuid || '' };
        }
        return { progress: 0 };
      })
    );
  }

  getMediaUrl(
    mediaValue: any,
    type: 'image' | 'video',
    options?: { useCache?: boolean }
  ): string | null {
    let value = mediaValue;
    if (
      type === 'image' &&
      mediaValue &&
      typeof mediaValue === 'object' &&
      mediaValue.poster
    ) {
      value = mediaValue.poster;
    }
    if (!value) {
      return null;
    }
    let uuid = value;
    if (value.includes(`/${type}`)) {
      uuid = value.substring(value.lastIndexOf('/') + 1);
    }
    if (options?.useCache && type === 'image' && this.imageCache.has(uuid)) {
      return this.imageCache.get(uuid) || null;
    }
    if (uuid.startsWith('blob:') || uuid.startsWith('data:')) {
      return uuid;
    }
    const token = this.authService.getToken();
    if (!token) {
      console.debug(`No token found for ${type} loading`);
      return null;
    }

    const authenticatedUrl = `${this.apiUrl}/${type}/${uuid}?token=${token}`;
    if (options?.useCache && type === 'image') {
      this.imageCache.set(uuid, authenticatedUrl);
    }
    return authenticatedUrl;
  }

  private imageCache = new Map<string, string>();
}
