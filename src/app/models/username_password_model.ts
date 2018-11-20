export class UserNamePasswordModel {

  constructor(public domain: string, public username: string, public password: string,
              public lastModifiedDate: number, public createdDate: number) {
  }
  constructor() {}
  constructor(public domain: string, public username: string, public password: string) {
    this.lastModifiedDate = Date.now().valueOf();
    this.createdDate = Date.now().valueOf();
  }

  getObject(): object {
    return {
      'domain': this.domain,
      'username': this.username,
      'password': this.password,
      'createdDate': this.createdDate,
      'lastModifiedDate': this.lastModifiedDate
    };
  }
}
