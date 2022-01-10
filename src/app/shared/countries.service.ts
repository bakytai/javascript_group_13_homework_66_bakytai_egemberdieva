import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountryName } from './countryName.model';
import { Country } from './country.model';

@Injectable()

export class CountriesService {
  countriesFetching = new Subject<boolean>();
  countriesNameChange = new Subject<CountryName[]>();

  private countryName: CountryName[] = [];

  constructor(private http: HttpClient) {}

  fetchCountries() {
    this.countriesFetching.next(true);
    this.http.get<{[id:string]:CountryName}>('http://146.185.154.90:8080/restcountries/rest/v2/all?fields=name;alpha3Code')
      .pipe(map(result => {
        return Object.keys(result).map(id => {
          const country = result[id];
          return new CountryName(country.name,country.alpha3Code);
        });
      }))
      .subscribe(countriesName => {
        this.countryName = countriesName;
        this.countriesNameChange.next(this.countryName.slice());
        this.countriesFetching.next(false);
      }, () => {
        this.countriesFetching.next(false);
      })

  }

  fetchOneCountry(alpha3Code:string) {
    return this.http.get<Country>(`http://146.185.154.90:8080/restcountries/rest/v2/alpha/${alpha3Code}`).pipe(map((result: Country) => {
        return new Country(result.name, result.capital, result.flag, result.population, result.languages);
      })
    );
  }
}
