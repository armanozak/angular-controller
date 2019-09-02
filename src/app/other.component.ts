import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<app-demo></app-demo>',
})
export class OtherComponent {}
