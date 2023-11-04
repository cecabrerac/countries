import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchText: string = '';

  getSearchText() {
    return this.searchText;
  }

  createSearchText(inputSearchText: any) {
      this.searchText = inputSearchText;
      // console.log(this.searchText)
    
  }

  constructor() {}
}
