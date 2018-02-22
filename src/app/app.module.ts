import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyDatePickerModule } from 'mydatepicker';
import {DpDatePickerModule} from 'ng2-date-picker';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';


@NgModule({
    imports:      [ BrowserModule, FormsModule, MyDatePickerModule, DpDatePickerModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }