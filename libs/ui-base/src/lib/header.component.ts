import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-header',
  imports: [MatToolbar, MatIcon, MatButtonModule, MatMenuModule, RouterModule],
  template: `
    <mat-toolbar>
      <button mat-icon-button [routerLink]="''">
        <mat-icon>whatshot</mat-icon>
      </button>
      <p>Welcome!</p>
      <div class="flex-1"></div>
      @if (user(); as user) {
      <button mat-icon-button [matMenuTriggerFor]="profileMenu">
        <mat-icon>person_outline</mat-icon>
      </button>
      <mat-menu #profileMenu="matMenu">
        <button mat-menu-item (click)="console.log('logout button clicked')">
          <mat-icon>logout</mat-icon>
          Log out
        </button>
      </mat-menu>
      }
    </mat-toolbar>
  `,
  styles: `
  `,
})
export class HeaderComponent {
  user = input(true);

  protected readonly console = console;
}
