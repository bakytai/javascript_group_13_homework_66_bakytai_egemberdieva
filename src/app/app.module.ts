import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './countries-list/country/country.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountriesService } from './shared/countries.service';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountriesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
