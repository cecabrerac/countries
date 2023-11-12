import { Component, OnInit, DoCheck } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { environment } from '../../../environments/environment';
import { SearchService } from 'src/app/search.service';
import { ContinentService } from 'src/app/continent.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, DoCheck {
  p: number = 1;
  itemsPerPage: number = 21;
  apiUrl = environment.url;
  public dataCards: any = [];
  public filteredData: any = [];
  public toShow: any = [];
  searchText: string = '';

  //continents
  continent: string = '';

  constructor(private restService: RestService, private searchService: SearchService, private continentService: ContinentService) {}

  ngOnInit(): void {
    if (this.dataCards.length == 0) this.getAllCountries();
    this.searchText = this.searchService.getSearchText()
    this.continent = this.continentService.getSelectedValue()
    console.log(this.continent)
    this.filteredData = this.getAllCountries();
  }

  ngDoCheck(){
    this.searchText = this.searchService.getSearchText()
    if (this.filteredData) this.toShow = this.filteredData.filter((item: any) => item.name.common.toLowerCase().includes(this.searchText.toLowerCase()));
    this.continent = this.continentService.getSelectedValue()
    console.log(this.continent)
    if (this.filteredData) this.toShow = this.filteredData.filter((item: any) => item.continents[0].toLowerCase().includes(this.continent.toLowerCase()));
  }

  getAllCountries() {
    this.restService.get(this.apiUrl).subscribe((respuesta: any) => {
      this.dataCards = respuesta;
      const sortedData = this.dataCards.sort((a: any, b: any) => {
        const aName = a.name.common;
        const bName = b.name.common;
        return aName < bName ? -1 : aName > bName ? 1 : 0;
      });
      this.filteredData = sortedData.filter((item: any) => item.name.common.includes(this.searchText));
      // this.toShow = sortedData.slice(0, 200);
    });
  }

  
    
    
}
