import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContinentService } from 'src/app/continent.service';

@Component({
  selector: 'app-continent-selection',
  templateUrl: './continent-selection.component.html',
  styleUrls: ['./continent-selection.component.scss']
})
export class ContinentSelectionComponent {

  public selectedValue = new FormControl('');

  constructor(private continentService: ContinentService) {}
  
  saveChange(){
    console.log(this.selectedValue)
    this.continentService.createSelectedValue(this.selectedValue);
  }

}
