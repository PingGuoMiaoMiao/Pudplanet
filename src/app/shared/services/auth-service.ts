import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl + '/auth'; // 后端认证API的基础URL

  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  passwordMatchValidator(passwordControlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // Support both per-control usage (control has parent) and group-level usage (control is the group)
      if (control.parent) {
        // Per-control usage: control is the confirm password control
        const password = control.parent.get(passwordControlName)?.value;
        const confirmPassword = control.value;
        if (password !== confirmPassword) {
          return { passwordMismatch: true };
        }
      } else {
        // Group-level usage: control is the FormGroup itself
        const password = control.get(passwordControlName)?.value;
        const confirmPassword = control.get('confirmPassword')?.value;
        if (password !== confirmPassword) {
          // Set error on the confirmPassword control for proper UI binding
          const confirmControl = control.get('confirmPassword');
          if (confirmControl) {
            confirmControl.setErrors({ passwordMismatch: true });
          }
          return { passwordMismatch: true };
        }
      }
      return null;
    };
  }

  signup(signupData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, signupData);
  }

  verifyEmail(token: string) {
    return this.http.get(`${this.apiUrl}/verify-email?token=${token}`);
  }

  login(credentials: any) {
    return this.http.post(this.apiUrl + '/login', credentials)
      .pipe(
        tap((response: any) => this.handleAuthSuccess(response)),
      );
  }

  handleAuthSuccess(response: any) {
    // 即使token为null也存储，因为后端可能返回null token
    if (response?.token !== undefined) {
      localStorage.setItem('token', response.token || '');
    }

    // 处理用户信息，兼容response为null的情况
    let user = null;
    if (response) {
      user = {
        email: response.email,
        fullName: response.fullName,
        role: response.role
      };
    }

    this.setCurrentUser(user);
    console.debug('[AuthService] 登录成功，token:', response?.token, '完整响应:', response);
  }

  setCurrentUser(user: any | null) {
    this.currentUserSubject.next(user);
  }

  getCurrentUser() {
    return this.currentUserSubject.value;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    // 如果token是空字符串，也视为未登录
    return !!token && token !== '';
  }

  redirectBaseOnRole() {
    const targetRoute = this.isAdmin() ? '/admin' : '/home';
    this.router.navigate([targetRoute]);
  }

  isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user?.role === 'ADMIN';
  }

  resendVerificationEmail(email: string) {
    return this.http.post(`${this.apiUrl}/resend-verification`, { email });
  }

  forgotPassword(email: string) {
    return this.http.post(`${this.apiUrl}/forgot-password`, { email });
  }

  resetPassword(token: string, newPassword: string) {
    return this.http.post(`${this.apiUrl}/reset-password`, { token, newPassword });
  }

  initializeAuth(): Promise<void> {
    return new Promise<void>((resolve) => {
      if (this.isLoggedIn()) {
        // 如果已登录，从后端获取当前用户信息
        this.fetchCurrentUser().subscribe({
          next: (user) => {
            this.setCurrentUser(user);
            resolve();
          },
          error: () => {
            this.setCurrentUser(null);
            resolve();
          }
        });
      } else {
        this.setCurrentUser(null);
        resolve();
      }
    });
  }

  private fetchCurrentUser() {
    return this.http.get(`${this.apiUrl}/current-user`);
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
    this.router.navigate(['/']);
  }

  changePassword(changePasswordData: any) {
    return this.http.post(`${this.apiUrl}/change-password`, changePasswordData);
  }

}
