import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Store } from './store';
import { SongsModule } from './songs/songs.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SongsModule,
    HttpClientModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
