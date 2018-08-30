import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MobileComponent } from '../mobile/mobile.component';
import { AddMobileComponent } from '../add-mobile/add-mobile.component';

const routes: Routes= [
  {path:'mobs',component:MobileComponent },
  {path:'add',component: AddMobileComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
