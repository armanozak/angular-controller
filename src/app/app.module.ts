import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SomeComponent } from './some.component';
import { OtherComponent } from './other.component';
import { DemoComponent, DemoController } from './demo.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    SomeComponent,
    OtherComponent,
    DemoComponent,
    DemoController,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
