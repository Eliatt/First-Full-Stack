import { Component, OnInit } from '@angular/core';
import { Customer } from '../app/models/Customer';
import { RestService } from './services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public customers: Customer[];

  public constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.restService.getAllCustomers().subscribe(
      (res) => { this.customers = res; },
      (err) => { alert(err.error); });
  }
}
