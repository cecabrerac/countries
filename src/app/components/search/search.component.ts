import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @ViewChild('searchInput')
  searchInputReference!: ElementRef;

  public searchText = new FormControl('');

  constructor(private searchService: SearchService) {}

  saveChange(){
    this.searchService.createSearchText(this.searchInputReference.nativeElement.value)
    if (!this.searchText) this.searchService.createSearchText(this.searchText)
  }
}
