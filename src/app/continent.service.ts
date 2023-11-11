import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContinentService {
    continent: string = '';

  getSelectedValue() {
    return this.continent;
  }

  createSelectedValue(inputText: any) {
      this.continent = inputText;
      // console.log(this.searchText)
    
  }

  constructor() {}
}
