import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Hover3dItemComponent } from './hover-3d-item/hover-3d-item.component';


@NgModule({
  declarations: [
    AppComponent,
    Hover3dItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
