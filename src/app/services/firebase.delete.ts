import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';


@Injectable({
  providedIn: 'root',
})

export class FirebaseDelete {

  constructor(private db: AngularFireDatabase) {
  }

  deleteByPath(path: string): void {
    this.db.object(path).remove()
      .then(() => console.log('Successfully deleted'))
      .catch(err => console.log(err, 'Failed to delete item in path' + path));
  }


  deleteByID(key: string): void {
    this.deleteByPath( + '/' +  key);
  }

  deleteDomain(Domain: string): void {
    this.deleteByPath(Domain);
  }
}
