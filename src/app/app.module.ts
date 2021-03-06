import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SummaryPipe } from './posts/shared/summary.pipe';
import { FromNowPipe } from './shared/from-now.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    FromNowPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
