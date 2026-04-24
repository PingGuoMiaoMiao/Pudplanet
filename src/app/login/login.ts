import { Component, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth-service';
import { NotificationService } from '../shared/services/notification-service';
import { ErrorHandlerService } from '../shared/services/error-handler-service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  showResendEmail = false;
  userEmail = '';
  loading = false;
  hidePassword = true;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notification: NotificationService,
    private errorHandlerService: ErrorHandlerService,
    private cdr: ChangeDetectorRef
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.authService.redirectBaseOnRole();
    }
  }

  submit() {
    console.log('submit called');
    this.loading = true;
    this.cdr.detectChanges(); // 手动触发变更检测

    const formData = this.loginForm.value;
    console.log('formData:', formData);
    const authdata = {
      email: formData.email?.trim().toLowerCase(),
      password: formData.password
    };
    console.log('authdata:', authdata);
    console.log('before login request');

    this.authService.login(authdata).subscribe({
      next: (response: any) => {
        console.log('login request success');
        console.debug('[Login] 登录成功，响应：', response);
        if (!response || !response.token) {
          console.error('[Login] 响应无 token:', response);
        }
        // handleAuthSuccess is already called via tap() in authService.login()
        // 登录成功后直接根据角色跳转，避免 currentUser 异步问题
        if (response.role === 'ADMIN') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/home']);
        }
        this.loading = false;
        this.cdr.detectChanges(); // 手动触发变更检测
      },
      error: (err: any) => {
        console.log('login request error', err);
        const errorMsg = err?.error?.message || err?.error?.err || 'Login failed. Please check your credentials and try again.';
        if (err.status === 403 && errorMsg.toLowerCase().includes('verified')) {
          this.showResendEmail = true;
          this.userEmail = this.loginForm.value.email;
        } else {
          this.showResendEmail = false;
        }
        this.notification.error(errorMsg);
        console.error('[Login] 登录失败:', err);
        this.loading = false;
        this.cdr.detectChanges(); // 手动触发变更检测
      },
      complete: () => {
        console.debug('[Login] 登录流程 complete');
      }
    });
  }

  resendVerificationEmail() {
    if (!this.userEmail) {
      this.notification.error('No email available to resend verification link.');
      return;
    }
    this.showResendEmail = false;
    this.loading = true;
    this.authService.resendVerificationEmail(this.userEmail).subscribe({
      next: (response: any) => {
        this.loading = false;
        this.notification.success(response?.message || 'Verification email resent! Please check your inbox.');
      },
      error: (err: any) => {
        this.loading = false;
        this.errorHandlerService.handle(err, 'Failed to resend verification email. Please try again later.');
      }
    });
  }

  forgot() {
    this.router.navigate(['/forgot-password']);
  }
}
