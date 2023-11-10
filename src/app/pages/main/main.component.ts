import { Component, OnInit, DoCheck } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { environment } from '../../../environments/environment';
import { SearchService } from 'src/app/search.service';
import { ContinentService } from 'src/app/services/continents';

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
  searchText: string = ''

  //continents
  it:any={}

  constructor(private restService: RestService, private searchService: SearchService, private continentService: ContinentService) {}

  ngOnInit(): void {
    if (this.dataCards.length == 0) this.getAllCountries();
    this.searchText = this.searchService.getSearchText()
    this.filteredData = this.getAllCountries();
    
    

  }

  ngDoCheck(){
    this.searchText = this.searchService.getSearchText()
    // console.log(this.searchText)
    if (this.filteredData) this.toShow = this.filteredData.filter((item: any) => item.name.common.toLowerCase().includes(this.searchText.toLowerCase()));
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
      console.log(this.filteredData)
      console.log(this.continentService.filterContinents(this.filteredData))
      // this.toShow = sortedData.slice(0, 200);
    });
  }

  
    
    
}
