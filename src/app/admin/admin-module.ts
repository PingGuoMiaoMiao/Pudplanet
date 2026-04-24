import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [AdminDashboard],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
