import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AgmCoreModule} from '@agm/core'; // <---
import {HttpClientModule} from '@angular/common/http'; // <---
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDJKdjTywY69M0Ubh4CxbKRRC65jFmxJkw'}), // <---
    HttpClientModule // <---
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
