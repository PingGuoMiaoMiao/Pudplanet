import { NgModule, provideAppInitializer, provideBrowserGlobalErrorListeners, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material 模块
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatError } from '@angular/material/form-field';
import { MatSpinner } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Landing } from './landing/landing';
import { SharedModule } from './shared/shared-module';
import { Signup } from './signup/signup';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { VerifyEmail } from './verify-email/verify-email';
import { Login } from './login/login';
import { Home } from './user/home/home';
import { authInterceptor } from './shared/interceptors/auth-interceptor';
import { ForgotPassword } from './forgot-password/forgot-password';
import { AuthService } from './shared/services/auth-service';
@NgModule({
  declarations: [App, Landing, Signup, VerifyEmail, Login, Home, ForgotPassword],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    // Material modules
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
  ],
  providers: [
    provideAppInitializer(() => {
      const auth = inject(AuthService);
      return auth.initializeAuth();
    }),
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
  bootstrap: [App],
})
export class AppModule {}
