import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from '../shared/services/error-handler-service';
import { AuthService } from '../shared/services/auth-service';
import { NotificationService } from '../shared/services/notification-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'],
})
export class Signup implements OnInit {
  hidePassword = true;
  hideConfirmPassword = true;
  signupForm!: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private notification: NotificationService,
    private errorHandlerService: ErrorHandlerService,
  ){
    this.signupForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, this.authService.passwrodMatchValidator('password')]]
    });
  }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()) {
      this.authService.redirectBaseOnRole();
    }


    const email = this.route.snapshot.queryParamMap.get('email');
    if (email) {
      this.signupForm.patchValue({ email: email });
      console.log('prefill signup email:', email);
    }
  }

  submit(){
    this.loading = true;
    const formData = this.signupForm.value;
    const data = {
      fullName: formData.fullName,
      email: formData.email?.trim().toLowerCase(),
      password: formData.password
    };

    this.authService.signup(data).subscribe({
      next: (response: any) => {
        this.loading = false;
        console.debug('[Signup] 注册成功，响应：', response);
        this.notification.success(response?.message || 'Signup successful! Please check your email to verify your account.');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.loading = false;
        console.error('[Signup] 注册失败:', err);
        this.errorHandlerService.handle(err, 'Signup failed. Please try again later.');
        debugger;
      }
    });
}

  }
