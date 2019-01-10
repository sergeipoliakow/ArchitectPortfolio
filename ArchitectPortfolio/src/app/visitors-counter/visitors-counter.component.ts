import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-visitors-counter',
  templateUrl: './visitors-counter.component.html',
  styleUrls: ['./visitors-counter.component.css']
})
export class VisitorsCounterComponent {

  visitorsCount: number;

  constructor(private db: AngularFirestore, fdb:AngularFireDatabase) {
    
    let subs = fdb.object('/params').valueChanges().subscribe(
      val => 
      {
        this.visitorsCount = val['visitorsCount']
        subs.unsubscribe();
        fdb.object('/params').update({visitorsCount:this.visitorsCount+1, param2: -1});
      }
    );

    fdb.object('/params').valueChanges().subscribe(
      val => 
      {
        this.visitorsCount = val['visitorsCount']
      }
    );

    // let itemDoc = db.doc<number>('params/TKWtCxLwnIjitQZDyTpt');
    // let item = itemDoc.valueChanges();
    // let subs = item.subscribe(val => {
    //   val['visitorsCount']++;
    //   itemDoc.update(val);
    //   subs.unsubscribe();
    // });

    // item.subscribe(val => {
    //   this.visitorsCount=val['visitorsCount'];
    // });
    
  }

}
