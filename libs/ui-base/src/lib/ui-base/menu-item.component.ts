import { Component, computed, input, signal } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { animate, style, transition, trigger } from '@angular/animations';
import { MenuItem } from './menu-item';

@Component({
  selector: 'lib-menu-item',
  imports: [RouterModule, RouterLinkActive, MatListModule, MatIconModule],
  template: `
    <a
      mat-list-item
      [routerLink]="routeHistory() + '/' + item().route"
      (click)="nestedItemOpen.set(!nestedItemOpen())"
      routerLinkActive
      #rla="routerLinkActive"
      [activated]="rla.isActive"
    >
      <mat-icon
        matListItemIcon
        [fontSet]="rla.isActive ? 'material-icons' : 'material-icons-outlined'"
        >{{ item().icon }}
      </mat-icon>
      @if (!collapsed()) {
      <span matListItemTitle>{{ item().label }}</span>
      } @if (item().subItems) {
      <span matListItemMeta>
        @if (nestedItemOpen()) {
        <mat-icon>expand_less</mat-icon>
        } @else {
        <mat-icon>expand_more</mat-icon>
        }
      </span>
      }
    </a>
    @if (nestedItemOpen()) {
    <div @expandContractMenu>
      @for (subItem of item().subItems; track subItem.route) {
      <lib-menu-item
        [item]="subItem"
        [routeHistory]="routeHistory() + '/' + item().route"
        [collapsed]="collapsed()"
      />
      }
    </div>
    }
  `,
  styles: `
    :host * {
      transition-property: margin-inline-start, opacity, height;
      transition-duration: 500ms;
      transition-timing-function: ease-in-out;
    }

  `,
  animations: [
    trigger('expandContractMenu', [
      transition(':enter', [
        style({ opacity: 0, height: '0px' }),
        animate('500ms ease-in-out', style({ opacity: 1, height: '*' })),
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ opacity: 0, height: '0px' })),
      ]),
    ]),
  ],
})
export class MenuItemComponent {
  item = input.required<MenuItem>();
  collapsed = input.required<boolean>();
  routeHistory = input('');

  level = computed(() => this.routeHistory().split('/').length - 1);

  nestedItemOpen = signal(false);
}
