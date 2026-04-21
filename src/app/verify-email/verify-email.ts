import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/services/auth-service';

@Component({
  selector: 'app-verify-email',
  standalone: false,
  templateUrl: './verify-email.html',
  styleUrls: ['./verify-email.css'],
})
export class VerifyEmail implements OnInit {
  loading: boolean = true;
  success: boolean = false;
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ){
  }

  ngOnInit(): void {
    const token = this.route.snapshot.queryParamMap.get('token');
    console.log('[VerifyEmail] token:', token);

    if (!token) {
      this.loading = false;
      this.success = false;
      this.message = 'Invalid verification link. No token provided.';
      console.log('[VerifyEmail] No token provided');
      return;
    }

    this.authService.verifyEmail(token).subscribe({
      next: (response: any) => {
        this.loading = false;
        this.success = true;
        this.message = response?.message || 'Email verified successfully! You can now log in.';
        this.cdr.detectChanges();
        console.log('[VerifyEmail] Success:', response);
      },
      error: (err) => {
        this.loading = false;
        this.success = false;
        this.message = err?.error?.message || err?.error?.err || 'Verification failed. The link may be invalid or expired.';
        this.cdr.detectChanges();
        console.log('[VerifyEmail] Error:', err);
      }
    });
  }
}
