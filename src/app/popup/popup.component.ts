import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DAOService} from '../services/DAO.service';
import {SelectItem} from 'primeng/api';
import {UserNamePasswordModel} from '../models/username_password_model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-pop-up',
  templateUrl: 'popup.html'
})


export class PopupComponent implements OnInit {

  private displayDialog: boolean;
  private isNewRow: boolean;
  private data_final: any[];
  private data: any[];
  private selectedRow: object = {};
  public cols: any = [
    {field: 'domain', header: 'Domain'},
    {field: 'username', header: 'Username'},
    {field: 'password', header: 'Password'}
  ];
  contextMenu = [
    {label: 'Copy', icon: 'pi pi-times'},
    {label: 'View', icon: 'pi pi-search'},
    {label: 'Delete', icon: 'pi pi-times'},
  ];

  private domains: SelectItem[] = [
    {label: 'All Domain', value: null}
  ];
  private rowGroupMetadata: any;

  @ViewChild('domainTableFilter') domainFilter: HTMLInputElement;
  @ViewChild('usernameTableFilter') usernameFilter: ElementRef;

  public constructor(private firebaseService: DAOService) {
    // this.firebaseService.getObservableListItem().subscribe(data => {
    //   this.data_final = data;
    //   this.data = this.data_final;
    //   this.data_final.map(model => model.payload.val().domain)
    //     .filter((x, i, a) => x && a.indexOf(x) === i)
    //     .forEach(item => {
    //       this.domains.push({label: item.toString(), value: item.toString()});
    //       console.log(this.domains);
    //     });
    //     this.updateRowGroupMetaData();
    // });
    let observer = this.firebaseService.getObservableListItem().pipe(
      map(changes => changes.map(x => ({key: x.key, ...x.payload.val()})))
    );
    observer.subscribe(data => {
      this.data_final = data;
      this.data = this.data_final;
      this.data_final.map(model => model.domain)
        .filter((x, i, a) => x && a.indexOf(x) === i)
        .forEach(item => {
          this.domains.push({label: item.toString(), value: item.toString()});
          console.log(this.domains);
        });
      this.updateRowGroupMetaData();
    });
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};
    if (this.data) {
      for (let i = 0; i < this.data.length; i++) {
        let rowData = this.data[i];
        let domain = rowData.domain;
        if (i === 0) {
          this.rowGroupMetadata[domain] = {index: 0, size: 1};
        } else {
          let previousRowData = this.data[i - 1];
          let previousRowGroup = previousRowData.domain;
          if (domain === previousRowGroup) {
            this.rowGroupMetadata[domain].size++;
          } else {
            this.rowGroupMetadata[domain] = {index: i, size: 1};
          }
        }
      }
    }
  }

  public ngOnInit(): void {
  }

  public deleteUser(user: UserNamePasswordModel) {

  }

  // public addUser() {
  //   this.firebaseService.addService.createUsernamePasswordField(this.addDomain, this.addUsername, this.addPassword);
  // }

  private filterDomain(domain: String): any[] {
    return this.data_final.filter(data => {
      if (domain == null || domain === undefined) {
        return data;
      }
      return data.domain === domain;
    });
  }

  public filter() {
    console.log(this.domainFilter.value, this.usernameFilter.nativeElement.value);
    this.data = this.filterDomain(this.domainFilter.value).filter(data => {
      let username = this.usernameFilter.nativeElement.value;
      if (username == null || username === undefined || username === '') {
        return data;
      } else {
        return data.username.includes(username);
      }
    });
    this.updateRowGroupMetaData();
  }

  public showDialog(): void {
    this.displayDialog = true;
  }

  public save(): void {
    if (this.isNewRow) {
      this.firebaseService.addService.
      createUsernamePasswordField(this.selectedRow.domain, this.selectedRow.username, this.selectedRow.password);
    } else {
      this.firebaseService.updateService.updateUserModel(this.selectedRow.key, new UserNamePasswordModel(
        this.selectedRow.domain, this.selectedRow.username, this.selectedRow.password, Date.now(), this.selectedRow.createdDate));
    }
    this.selectedRow = {};
    this.displayDialog = false;
  }

  public onRowSelect(event) {
    this.isNewRow = false;
    this.selectedRow = this.cloneRow(event.data);
    this.displayDialog = true;
  }

  cloneRow(c: object): object {
    let car = {};
    for (let prop of Object.keys(c)) {
      car[prop] = c[prop];
    }
    console.log(car);
    return car;
  }

}

