import {Component} from '@angular/core';
import {DAOService} from './services/DAO.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'V-Password-Manager';
  data: any;
  constructor (private database: DAOService) {
    database.getObservableListItem().subscribe(data => this.data = data);
  }

}
