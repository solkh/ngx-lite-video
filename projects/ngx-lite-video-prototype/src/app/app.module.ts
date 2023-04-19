import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NgxLiteVimeoModule,
  NgxLiteYoutubeModule,
} from 'projects/ngx-lite-video/src/public-api';

@NgModule({
  declarations: [AppComponent],
  schemas: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxLiteYoutubeModule,
    NgxLiteVimeoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
