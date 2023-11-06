import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public searchText = new FormControl('');

  constructor(private searchService: SearchService) {}

  saveChange(){
    this.searchService.createSearchText(this.searchText.value);
  }

}
