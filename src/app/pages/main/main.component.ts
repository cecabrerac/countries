import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { environment } from '../../../environments/environment';

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
      this.firstTen = this.dataCards.slice(0, 30);
      console.log(this.dataCards);
      console.log(this.firstTen);
    });
  }
}
