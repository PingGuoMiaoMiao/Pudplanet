import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl + '/users';

  constructor(private http: HttpClient) {}

  getAllUsers(page: number, size: number, search?: string) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    if (search) {
      params = params.set('search', search);
    }
    return this.http.get(this.apiUrl, { params });
  }

  createUser(user: any) {
    return this.http.post(this.apiUrl, user);
  }

  getUserById(id: string | number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateUser(id: string | number, user: any) {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: string | number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  toggleUserStatus(id: string | number) {
    return this.http.patch(`${this.apiUrl}/${id}/toggle-status`, {});
  }

  changeUserRole(id: string | number) {
    return this.http.patch(`${this.apiUrl}/${id}/change-role`, {});
  }
}
