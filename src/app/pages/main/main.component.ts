import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { environment } from '../../../environments/environment';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  apiUrl = environment.url;
  public dataCards: any;
  public firstTen: any;
  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries() {
    this.restService.get(this.apiUrl).subscribe((respuesta: any) => {
      this.dataCards = respuesta;
      const sortedData = this.dataCards.sort((a, b) => {
        const aName = a.name.common;
        const bName = b.name.common;
        return aName < bName ? -1 : aName > bName ? 1 : 0;
      });
      this.firstTen = sortedData.slice(200);
    });
  }
}
