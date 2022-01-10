import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Country } from './shared/country.model';
import { CountryResolverService } from './countries-list/country-resolver.service';

const routes: Routes = [
  {
    path: 'countries/:alpha3Code', component: Country,
    resolve: {
      country: CountryResolverService
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
