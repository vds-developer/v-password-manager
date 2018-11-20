import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {UserNamePasswordModel} from '../models/username_password_model';

@Injectable({
  providedIn: 'root',
})

export class FirebaseAdd {

  constructor(private db: AngularFireDatabase) {
  }

  createByPath(path: string, item: any): void {
    this.db.database.ref(path).push(item).then(() => console.log('Successfully created' + item.toString() + ' in ' + path))
   //  this.db.object(path).set(item)
   //    .then(() => console.log('Successfully created' + item.toString() + ' in ' + path))
   //    .catch(err => console.log('Failed to delete item in path ' + path + ' with object ' + item.toString()));toString
  }

  createUsernamePasswordField(domain: string, username: string, password: string) {
    this.createByPath('/', new UserNamePasswordModel(domain, username, password, Date.now(), Date.now()).getObject());
  }
  createUsernamePasswordField(usernamePasswordModel: UserNamePasswordModel) {
    this.createByPath('/', usernamePasswordModel);
  }
}
