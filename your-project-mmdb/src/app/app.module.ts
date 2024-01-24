import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { SearchSkeletonComponent } from './search-skeleton/search-skeleton.component';
import { SearchResutlsComponent } from './search-resutls/search-resutls.component';
import { SearchNotfoundComponent } from './search-notfound/search-notfound.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SearchSkeletonComponent,
    SearchResutlsComponent,
    SearchNotfoundComponent,
    SearchDetailComponent,
    NavigationbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
