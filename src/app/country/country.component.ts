import { Component, OnInit } from '@angular/core';
import { Country } from '../shared/country.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  country!: Country;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      console.log(data);
      this.country = <Country>data.country;
    });
  }

}
