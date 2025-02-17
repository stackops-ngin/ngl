import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lib-layout-empty',
  imports: [RouterOutlet],
  template: `
    <div class="centered-div">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: `
    .centered-div {
      display: flex;
      justify-content: center; /* Center horizontally */
      align-items: center; /* Center vertically */
      height: 100vh; /* Full viewport height */
    }
  `,
})
export class LayoutEmptyComponent {}
