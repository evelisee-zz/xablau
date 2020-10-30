import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtaquesComponent } from './ataques.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AtaquesComponent,
  },
]


@NgModule({
  declarations: [
    AtaquesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AtaquesModule { }
