import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-visitors-counter',
  templateUrl: './visitors-counter.component.html',
  styleUrls: ['./visitors-counter.component.css']
})
export class VisitorsCounterComponent {

  visitorsCount: number;

  constructor(private db: AngularFirestore) {

    let itemDoc = db.doc<number>('params/TKWtCxLwnIjitQZDyTpt');
    let item = itemDoc.valueChanges();
    let subs = item.subscribe(val => {
      console.log(val);
      val['visitorsCount']++;
      itemDoc.update(val);
      this.visitorsCount=val['visitorsCount'];
      subs.unsubscribe();
    });
    
  }

}
