import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from './menu-item';
import { LayoutComponent } from './layout.component';

@Component({
  selector: 'lib-ui-base',
  imports: [CommonModule, LayoutComponent],
  template: `
    <lib-layout [menuItems]="menuItems()" />
    `,
  styles: ``,
})
export class UiBaseComponent {
  menuItems = input<MenuItem[]>([]);
}
