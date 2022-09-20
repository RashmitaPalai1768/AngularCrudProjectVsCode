import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewAllDataComponent } from './view-all-data/view-all-data.component';
import { UpdateUserComponent } from './update-user/update-user.component'

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    ViewAllDataComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
