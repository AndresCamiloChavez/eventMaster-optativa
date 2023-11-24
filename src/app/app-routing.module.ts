import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPayComponent } from './form-pay/form-pay.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  {
    path: 'home',
    component: SliderComponent,
  },
  {
    path: 'pay',
    component: FormPayComponent,
  },
  {
    path: '',
    component: SliderComponent,
  },
  {
    path: '**',
    component: SliderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
