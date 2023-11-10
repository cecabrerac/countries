import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContinentService {
  
  continents: any =[];

  public filterContinents(data: any) {
    console.log(data.length)
    //note
    for (let i = 0; i < data.length; i++) {
      if(data[i].continents[0]) {
      this.continents.push ( data[i].continents[0]);
    }
      
    }
    return [...new Set(this.continents)]
  }

 
}