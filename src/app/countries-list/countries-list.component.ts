import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountryName } from '../shared/countryName.model';
import { CountriesService } from '../shared/countries.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit, OnDestroy {
  isFetching = false;
  countriesName!: CountryName[];
  countriesChangeSubscription!: Subscription;
  countriesFetchingSubscription!: Subscription;

  constructor(private countryService: CountriesService) {
  }

  ngOnInit() {
    this.countriesChangeSubscription = this.countryService.countriesNameChange.subscribe((countries: CountryName[]) => {
      this.countriesName = countries;
    });
    this.countriesFetchingSubscription = this.countryService.countriesFetching.subscribe((isFetching: boolean) => {
      this.isFetching = isFetching;
    });
    this.countryService.fetchCountries();
  }

  ngOnDestroy() {
    this.countriesChangeSubscription.unsubscribe();
    this.countriesFetchingSubscription.unsubscribe();
  }
}
