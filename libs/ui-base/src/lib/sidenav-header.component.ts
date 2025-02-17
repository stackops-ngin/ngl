import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'lib-sidenav-header',
  imports: [],
  template: `
    <div class="pt-6 flex flex-col items-center">
      <!--            <img-->
      <!--              class="object-cover object-center rounded-full mb-3 aspect-square"-->
      <!--              [width]="profilePicSize()"-->
      <!--              [height]="profilePicSize()"-->
      <!--              [src]="'/personplaceholder.png'"-->
      <!--              alt="image of user logged in"-->
      <!--            />-->
      <div class="text-center mb-2 h-[3rem] {{ collapsd() ? '!h-0 opacity-0' : '' }}">
        <h2 class="text-lg">UserName</h2>
        <p class="text-sm">UserRole</p>
      </div>
    </div>
  `,
  styles: `

  :host * {
    transition-property: width, height, opacity;
    transition-duration: 500ms;
    transition-timing-function: ease-in-out;
  }

  `,
})
export class SidenavHeaderComponent {
  collapsd = input<boolean>(false);

  // profilePicSize = computed(() => (this.collapsd() ? '32' : '100'));
}
