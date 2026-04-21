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

  constructor(private http: HttpClient,
    private router: Router,
  ) {}

  passwrodMatchValidator(passwrodControlName:string): ValidatorFn {
    return (confirmControl: AbstractControl): ValidationErrors | null => {
      if(!confirmControl.parent) return null; // 确保父控件存在
      const password = confirmControl.parent.get(passwrodControlName)?.value; // 获取密码控件的值
      const confirmPassword = confirmControl.value; // 获取确认密码控件的值
      if (password !== confirmPassword) {
        return { passwordMismatch: true }; // 返回验证错误对象
      }
      return null; // 验证通过，返回null
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
    if(response?.token) {
      localStorage.setItem('token', response.token);
    }
    // 兼容后端返回的用户信息
    const user = {
      email: response.email,
      fullName: response.fullName,
      role: response.role
    };
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
    return !!this.getToken();
  }

  redirectBaseOnRole(){
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
    return new Promise((resolve) => {
      if (this.isLoggedIn()) {
        this.handleAuthSuccess(null);
        resolve();
        return;
      }
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
    });}

    private fetchCurrentUser(){
      return this.http.get(`${this.apiUrl}/current-user`);
    }

    logout() {
      localStorage.removeItem('token');
      this.currentUserSubject.next(null);
      this.router.navigate(['/']);
    }
}
