import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-signup',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
  ],
  template: `
    <mat-card appearance="outlined" class="signup-card">
      <mat-card-header class="mb-5">
        <mat-card-title>Sign Up</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <form [formGroup]="signUpForm">
          <p>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Email for Sign Up</mat-label>
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
        </form>
      </mat-card-content>
      <mat-card-actions align="end">
        <button mat-flat-button>Sign Up</button>
      </mat-card-actions>
    </mat-card>
    <p style="text-align: center">
      <span>Already have an account? </span>
      <a mat-button [routerLink]="['/login']">Login</a>
    </p>
  `,
  styles: [
    `
      .signup-card {
        width: 400px;
      }

      .full-width {
        width: 100%;
      }
    `,
  ],
})
export class SignUpComponent {
  signUpForm = new FormGroup({
    email: new FormControl(''),
  });
}
