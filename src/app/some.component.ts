import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<app-other></app-other>',
})
export class SomeComponent {}
