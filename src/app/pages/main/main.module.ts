import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from 'src/app/components/card/card.component';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [{ path: '', component: MainComponent }];

@NgModule({
  declarations: [MainComponent, CardComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class MainModule {}
