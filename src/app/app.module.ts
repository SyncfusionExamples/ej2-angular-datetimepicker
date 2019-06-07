import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AppComponent } from './app.component';

@NgModule({
    imports: [ BrowserModule, DateTimePickerModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }