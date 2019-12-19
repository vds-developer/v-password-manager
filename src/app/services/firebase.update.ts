import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {UserNamePasswordModel} from '../models/username_password_model';
import {User} from 'firebase';


@Injectable({
  providedIn: 'root',
})

export class FirebaseUpdate {

  constructor(private db: AngularFireDatabase) {
  }

  updateByPath(path: string, object: any) {
    this.db.object(path).update(object)
      .then(() => console.log('Successfully updated with object ' + object.toString() + ' in path ' + path))
      .catch(err => console.log(err, 'Failed updated with object ' + object.toString() + ' in path ' + path));
  }

  updateUsername(key: string, username: string) {
    this.updateByPath(key, {
      'username': username,
      'lastModifiedDate': Date.now()
    });
  }

  updatePassword(key: string, password: string) {
    this.updateByPath(key, {
      'password': password,
      'lastModifiedDate': Date.now()
    });
  }
  updateUserModel(key: string, usernamePasswordModel: UserNamePasswordModel) {
    this.updateByPath(key, usernamePasswordModel)
  }
}
