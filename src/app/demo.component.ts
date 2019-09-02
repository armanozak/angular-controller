import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Injector,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1 (click)="self.greet.emit(name)">
      Hello {{self.name}}!
    </h1>
  `,
})
export class DemoComponent implements OnInit {
  @Input() name: string;

  @Output() greet = new EventEmitter<string>();

  private controller: DemoController;

  get self(): DemoComponent {
    return this.controller || this;
  }

  constructor(
    protected cdRef: ChangeDetectorRef,
    private injector: Injector,
  ) {}

  ngOnInit() {
    this.controller = this.injector.get(
      DemoController,
      null,
    );
    
    if (this.controller) this.controller.cdRef = this.cdRef;
  }
}


@Component({
  selector: 'app-demo-controller',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
})
export class DemoController extends DemoComponent implements OnChanges {
  ngOnChanges() {
    this.cdRef.markForCheck();
  }
}
