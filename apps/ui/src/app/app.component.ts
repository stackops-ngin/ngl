import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiBaseComponent } from '@ngl/ui-base';
import { menuItems } from './menu-items';

@Component({
  imports: [ RouterModule, UiBaseComponent],
  selector: 'app-root',
  template: `
    <lib-ui-base [menuItems]="menuItems"></lib-ui-base>
    <router-outlet></router-outlet>
  `,
  styles: '',
})
export class AppComponent {
  title = 'ui';
  protected readonly menuItems = menuItems;
}
