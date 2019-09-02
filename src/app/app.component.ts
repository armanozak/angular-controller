import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-demo [name]="name"></app-demo>
    
    <app-demo-controller [name]="name.toLowerCase()">
      <app-other></app-other>
    </app-demo-controller>

    <app-demo-controller [name]="name.toUpperCase()">
      <app-other></app-other>
    </app-demo-controller>
  `,
})
export class AppComponent implements OnInit {
  private interval: number;
  private names = ['Angular', 'World'];

  name = this.names[0];

  ngOnInit() {
    let count = 0;

    this.interval = setInterval(
      () => this.name = this.names[++count % this.names.length],
      2000
    );
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
