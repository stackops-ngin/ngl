import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '@ngl/ui-base';
import { menuItems } from './menu-items';

@Component({
  selector: 'app-authenticated',
  imports: [CommonModule, LayoutComponent],
  template: `<lib-layout [menuItems]="menuItems"></lib-layout>`,
  styles: ``,
})
export class AuthenticatedComponent {
  protected readonly menuItems = menuItems;
}
