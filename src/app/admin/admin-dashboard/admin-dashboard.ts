import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth-service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.css']
})
export class AdminDashboard implements OnInit {
  currentUser: any;

  constructor(private authService: AuthService) {
    console.debug('AdminDashboard component loaded');
  }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    console.debug('Current user in admin dashboard:', this.currentUser);
  }
}
