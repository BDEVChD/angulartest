import { ImageBoxService } from './image-box/image-box.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageBoxComponent } from './image-box/image-box.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './image-box/title/title.component';


@NgModule({
  declarations: [
    AppComponent, 
    ImageBoxComponent, TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ImageBoxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
