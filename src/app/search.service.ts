import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchText: string = '';

  getSearchText() {
    return this.searchText;
  }

  createSearchText(inputSearchText: string) {
    if (inputSearchText.length !== 0) {
      this.searchText = inputSearchText;
    }
  }

  constructor() {}
}
