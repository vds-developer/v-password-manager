import {Injectable} from '@angular/core';
import {AngularFireAction, AngularFireDatabase} from '@angular/fire/database';
import {FirebaseAdd} from './firebase.add';
import {FirebaseDelete} from './firebase.delete';
import {FirebaseUpdate} from './firebase.update';
import {FirebaseGet} from './firebase.get';
import {Observable} from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root',
})

export class DAOService {

  constructor(public db: AngularFireDatabase, public addService: FirebaseAdd,
              public deleteService: FirebaseDelete, public updateService: FirebaseUpdate, public getService: FirebaseGet) {
  }

  public getObservableListItem(): Observable<AngularFireAction<firebase.database.DataSnapshot>[]> {
    return this.db.list('/').snapshotChanges();
  }

}






