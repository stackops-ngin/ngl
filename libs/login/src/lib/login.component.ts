import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import {
  MatFormField,
  MatLabel,
  MatSuffix,
} from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatAnchor, MatButton, MatIconButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-login',
  imports: [
    ReactiveFormsModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatFormField,
    MatIcon,
    MatLabel,
    MatInput,
    MatSuffix,
    MatIconButton,
    MatCardActions,
    RouterLink,
    MatAnchor,
    MatButton,
  ],
  template: `
    <mat-card appearance="outlined" class="login-card">
      <mat-card-header class="mb-5">
        <mat-card-title>Login</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <form [formGroup]="loginForm">
          <p>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Email for Login</mat-label>
              <input
                matInput
                placeholder="Enter email address"
                id="email"
                type="email"
                formControlName="email"
                autocomplete="username"
              />
              <mat-icon matSuffix>alternate_email</mat-icon>
            </mat-form-field>
          </p>
          <p>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Enter your password</mat-label>
              <input
                matInput
                [type]="hide() ? 'password' : 'text'"
                id="password"
                formControlName="password"
              />
              <button
                mat-icon-button
                matSuffix
                (click)="clickEvent($event)"
                [attr.aria-label]="'Hide password'"
                [attr.aria-pressed]="hide()"
              >
                <mat-icon
                  >{{ hide() ? 'visibility_off' : 'visibility' }}
                </mat-icon>
              </button>
            </mat-form-field>
          </p>
        </form>
      </mat-card-content>
      <mat-card-actions align="end">
        <button mat-flat-button>Login</button>
      </mat-card-actions>
    </mat-card>
    <p style="text-align: center">
      <span>Don't have an account? </span>
      <a mat-button [routerLink]="['/signup']">Sign up!</a>
    </p>
  `,
  styles: [
    `
      .login-card {
        width: 400px;
      }

      .full-width {
        width: 100%;
      }
    `,
  ],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  updateName() {
    this.loginForm.setValue({
      email: 'test@domain.com',
      password: 'password',
    });
  }

  hide = signal(true);

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
