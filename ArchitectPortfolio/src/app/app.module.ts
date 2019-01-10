import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Hover3dItemComponent } from './hover-3d-item/hover-3d-item.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { VisitorsCounterComponent } from './visitors-counter/visitors-counter.component';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    Hover3dItemComponent,
    VisitorsCounterComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
