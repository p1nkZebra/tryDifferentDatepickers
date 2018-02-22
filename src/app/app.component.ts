import {Component, ViewChild} from '@angular/core';
import {DatePickerComponent, IDatePickerConfig} from 'ng2-date-picker';
import {IMyDpOptions} from 'mydatepicker';
// import { DatepickerOptions } from 'ng2-datepicker';
// import * as ruLocale from 'date-fns/locale/ru';



class Item{
    purchase: string;
    done: boolean;
    price: number;

    constructor(purchase: string, price: number) {

        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
}

@Component({
    selector: 'purchase-app',
    templateUrl: './app.component.html',
    // styles: [`
    //         h1, h2{color:navy;}
    //         p{font-size:13px; font-family:Verdana;}
    // `],
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };

    // Initialized to specific date (09.10.2018).
    public model: any = { date: { year: 2018, month: 10, day: 9 } };

    constructor() { }

    config: IDatePickerConfig = {
        firstDayOfWeek: 'su',
        monthFormat: 'MMM, YYYY',
        disableKeypress: false,
        allowMultiSelect: false,
        closeOnSelect: true,
        closeOnSelectDelay: 100,
        openOnFocus: true,
        openOnClick: true,
        onOpenDelay: 0,
        weekDayFormat: 'ddd',
        appendTo: document.body,
        showNearMonthDays: true,
        showWeekNumbers: false,
        enableMonthSelector: true,
        yearFormat: 'YYYY',
        showGoToCurrent: true,
        dayBtnFormat: 'DD',
        monthBtnFormat: 'MMM',
        hours12Format: 'hh',
        hours24Format: 'HH',
        meridiemFormat: 'A',
        minutesFormat: 'mm',
        minutesInterval: 1,
        secondsFormat: 'ss',
        secondsInterval: 1,
        showSeconds: false,
        showTwentyFourHours: false,
        timeSeparator: ':',
        multipleYearsNavigateBy: 10,
        showMultipleYearsNavigation: false,
        // locale: moment.locale(),
        hideInputContainer: false,
    };


    @ViewChild('dayPicker') datePicker: DatePickerComponent;

    open() {
        this.datePicker.api.open();
    }

    close() {
        this.datePicker.api.close();
    }





    items: Item[] =
        [
            { purchase: "Хлеб", done: false, price: 15.9 },
            { purchase: "Масло", done: false, price: 60 },
            { purchase: "Картофель", done: true, price: 22.6 },
            { purchase: "Сыр", done: false, price:310 }
        ];
    addItem(text: string, price: number): void {

        if(text==null || text==undefined || text.trim()=="")
            return;
        if(price==null || price==undefined)
            return;
        this.items.push(new Item(text, price));
    }


}