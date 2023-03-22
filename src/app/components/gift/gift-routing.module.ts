import { GiftComponent } from './gift.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'gift-home'
  },
  {
    path: 'gift-home',
    component: GiftComponent
  },
  {
    path: 'gift1',
    loadChildren: () => import('./gift1/gift1.module').then(m => m.Gift1Module)
  },
  {
    path: 'gift2',
    loadChildren: () => import('./gift2/gift2.module').then(m => m.Gift2Module)
  },
  {
    path: 'gift3',
    loadChildren: () => import('./gift3/gift3.module').then(m => m.Gift3Module)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiftRoutingModule { }
