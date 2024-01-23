import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collectionData, collection, onSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
  name: string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'course-viewer';

  item$: Observable<Item[]>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const itemCollection = collection(this.firestore, 'test');
    this.item$ = collectionData(itemCollection) as Observable<Item[]>
  }
}
