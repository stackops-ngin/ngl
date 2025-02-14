import { Component, computed, input, model, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MenuItemComponent } from './menu-item.component';
import { MenuItem } from './menu-item';
import { SidenavHeaderComponent } from './sidenav-header.component';

@Component({
  selector: 'lib-sidenav',
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MatIconModule,
    MenuItemComponent,
    SidenavHeaderComponent,
  ],
  template: `
    <lib-sidenav-header [collapsd]="collapsed()" />
    <mat-nav-list class="[--mat-list-active-indicator-shape:0px]">
      @for (item of menuItems(); track item.label) {
      <lib-menu-item [item]="item" [collapsed]="collapsed()" />
      }

      <mat-list-item></mat-list-item>
      <mat-list-item></mat-list-item>

      <mat-list-item (click)="toggleDark()">
        <mat-icon matListItemIcon>brightness_6</mat-icon>
        @if (!collapsed()) {
          <div matListItemTitle style="font-size: 0.8rem;">
          {{ navLightDark() }} theme
        </div>
        }
      </mat-list-item>
      <mat-list-item (click)="toggleCollapsed()">
        <mat-icon matListItemIcon>{{
          collapsed() ? 'more_horiz' : 'more_vert'
        }}</mat-icon>
        @if (!collapsed()) {
        <span matListItemTitle style="font-size: 0.8rem;"> Icons only </span>
        }
      </mat-list-item>
    </mat-nav-list>
  `,
  styles: [
    `
      :host * {
        transition-property: width, height, opacity;
        transition-duration: 500ms;
        transition-timing-function: ease-in-out;
      }
    `,
  ],
})
export class SidenavComponent {
  menuItems = input<MenuItem[]>([]);
  collapsed = model<boolean>(false);
  navLightDark = signal('Dark');
  darkMode = computed(() => this.navLightDark() === 'Light');

  toggleCollapsed() {
    this.collapsed.update((v) => !v);
  }

  toggleDark() {
    const newScheme = !this.darkMode();
    document.documentElement.classList.toggle('dark', newScheme);
    this.navLightDark.set(newScheme ? 'Light' : 'Dark');
  }
}
