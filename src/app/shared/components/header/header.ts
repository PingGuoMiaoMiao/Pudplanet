import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NotificationService } from '../../services/notification-service';
import { AuthService } from '../../services/auth-service';
import { DialogService } from '../../services/dialog-service';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit, OnDestroy {
  @Input() showRouterOutlet: boolean = true;
  currentUser: any = null;
  isAdminMode: boolean = false;
  private routerSubscription: Subscription | null = null;

  constructor(
    private authService: AuthService,
    private notification: NotificationService,
    private dialogService: DialogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.updateMode();

    this.routerSubscription = this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateMode();
    });
  }

  private updateMode(): void {
    this.isAdminMode = this.router.url.startsWith('/admin');
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  isAdmin(): boolean {
    return this.currentUser?.role === 'ADMIN';
  }

  switchMode(): void {
    if (this.isAdminMode) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/admin']);
    }
  }

  openChangePassword() {
    this.dialogService.openChangePasswordDialog();
  }

  logout() {
    this.dialogService.openConfirmation(
      'Logout?',
      'Are you sure you want to logout from your account?',
      'Logout',
      'Cancel',
      'warning'
    ).subscribe((result: boolean) => {
      if (result) {
        this.authService.logout();
      }
    });
  }
}
