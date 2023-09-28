import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { NbCardModule, NbButtonModule } from '@nebular/theme';
import { CardComponent } from 'src/app/components/card/card.component';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';

const routes: Routes = [{ path: '', component: MainComponent }];

@NgModule({
  declarations: [MainComponent, CardComponent, PaginationComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class MainModule {}
