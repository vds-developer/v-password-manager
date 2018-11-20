import {NgModule} from '@angular/core';
import {PopupComponent} from './popup.component';
import {AppRoutingModule} from '../app-routing.module';
import {CommonModule} from '@angular/common';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContextMenuModule} from 'primeng/contextmenu';
import {MenuItem} from 'primeng/api';
import {DialogModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    PopupComponent
  ],
  imports: [
    AppRoutingModule,
    TableModule,
    CommonModule,
    FormsModule,
    AngularFireDatabaseModule,
    DropdownModule,
    InputTextModule,
    SplitButtonModule,
    ButtonModule,
    ContextMenuModule,
    BrowserAnimationsModule,
    DialogModule
  ],
  exports: [PopupComponent],
  providers: [],
})

export class PopupModule { }
