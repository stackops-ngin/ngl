import { Component, computed, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from './menu-item';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'lib-layout',
  template: `
    <lib-header/>
    <mat-divider></mat-divider>
    <mat-sidenav-container>
      <mat-sidenav
        opened
        mode="side"
        [style.width]="sidenavWidth()"
        style="transition:width 500ms ease-in-out;"
      >
        <lib-sidenav [(collapsed)]="collapsed" [menuItems]="menuItems()" />
      </mat-sidenav>
      <mat-sidenav-content
        class="content"
        [style.margin-left]="sidenavWidth()"
        style="transition:margin-left 500ms ease-in-out;"
      >
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  imports: [
    CommonModule,
    MatSidenavModule,
    SidenavComponent,
    RouterOutlet,
    HeaderComponent,
    MatDivider,
  ],
  styles: `
    :host {
      position: relative;
    }

    .content {
      padding: 24px;
      box-sizing: border-box;
    }

    mat-sidenav-container {
      height: calc(100vh - 64px);
    }

    mat-sidenav {
      --mat-sidenav-container-divider-color: var(--sys-outline-variant);
      --mat-sidenav-container-shape: 0px;
    }

  `,
})
export class LayoutComponent {
  menuItems = input<MenuItem[]>([]);
  collapsed = signal(false);
  sidenavWidth = computed(() => (this.collapsed() ? '65px' : '200px'));
}
