import { Injectable } from '@angular/core';
import { Country } from '../shared/country.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CountriesService } from '../shared/countries.service';

@Injectable({
  providedIn: 'root'
})
export class CountryResolverService implements Resolve<Country>{

  constructor(private countryService: CountriesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Country> {
    const countryCode = <string>route.params['alpha3Code'];
    return this.countryService.fetchOneCountry(countryCode);
  }
}
