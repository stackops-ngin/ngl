import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { menuItems } from './menu-items';

@Component({
  imports: [ RouterModule],
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: '',
})
export class AppComponent {
  title = 'ui';
  protected readonly menuItems = menuItems;
}
