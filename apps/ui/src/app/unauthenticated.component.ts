import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutEmptyComponent } from '@ngl/ui-base';

@Component({
  selector: 'app-unauthenticated',
  imports: [CommonModule, LayoutEmptyComponent],
  template: `<lib-layout-empty></lib-layout-empty>`,
  styles: ``,
})
export class UnauthenticatedComponent {}
