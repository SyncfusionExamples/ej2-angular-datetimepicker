import {Component} from '@angular/core';

@Component ({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    public minDate: Date = new Date ("05/07/2017 2:00 AM");
    public maxDate: Date = new Date ("05/27/2017 11:00 AM");
    public dateValue: Date = new Date ("05/16/2017 5:00 AM");
    constructor () {}
}