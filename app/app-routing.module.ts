import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import {HeaderComponent} from './../app/components/header/header.component';
//import {FooterComponent} from './../app/components/footer/footer.component';
import {HomeComponent} from './../app/components/home/home.component';
import {SetEndPointComponent} from './../app/components/setEndPoint/setEndPoint.component';

const appRoutes: Routes = [
    /***
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: '', component: FooterComponent },
  { path: '**', component: HeaderComponent }
  ***/
  { path: 'home', component: HomeComponent },
  { path: 'setEndPoint', component: SetEndPointComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
