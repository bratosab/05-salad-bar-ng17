import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaladComponent } from './salad.component';
import { orderGuard } from '../guards/order.guard';

const routes: Routes = [
  { path: 'salad/:id', component: SaladComponent, canActivate: [orderGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaladRoutingModule {}
