import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { MobileComponent } from './mobile/mobile.component';
import { PersonComponent } from './person/person.component';
import { AddMobileComponent } from './add-mobile/add-mobile.component';
import { MobileService } from './mobile.service';
import { AppRoutingModule } from './app.routing/app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    PersonComponent,
    AddMobileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MobileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
