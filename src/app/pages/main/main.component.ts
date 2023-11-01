import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { environment } from '../../../environments/environment';
import { SearchComponent } from 'src/app/components/search/search.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  p: number = 1;
  itemsPerPage: number = 21;
  apiUrl = environment.url;
  public dataCards: any = [];
  public toShow: any;

  constructor(private restService: RestService) {}

  ngOnInit(): void {
    console.log(this.dataCards.length);
    if (this.dataCards.length == 0) this.getAllCountries();
  }

  getAllCountries() {
    this.restService.get(this.apiUrl).subscribe((respuesta: any) => {
      this.dataCards = respuesta;
      const sortedData = this.dataCards.sort((a: any, b: any) => {
        const aName = a.name.common;
        const bName = b.name.common;
        return aName < bName ? -1 : aName > bName ? 1 : 0;
      });
      this.toShow = sortedData.filter((item: any) => item.name.common.includes('col'));
      // this.toShow = sortedData.slice(0, 200);
    });
  }
}
