import {Injectable} from '@angular/core';
import {AngularFireAction, AngularFireDatabase} from '@angular/fire/database';
import {BehaviorSubject, Observable, Subject} from '../../../node_modules/rxjs';
import {switchMap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})

export class FirebaseGet {
  public queryObserver: Observable<any[]>;
  public query: Subject<string>;


  constructor(private db: AngularFireDatabase) {
    this.query = new Subject<string>();
    this.queryObserver = this.query.pipe(
      switchMap( domain => {
        return this.db.list('/', ref => {
          return ref.orderByChild('domain').equalTo(domain)
        }).snapshotChanges()
      }));
    // this.queryObserver.subscribe(query => console.log('query', query))
  }

  getDomain(domain: string): Observable<any[]> {
   this.query.next(domain);
   return this.queryObserver;
}


}
