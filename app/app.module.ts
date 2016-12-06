import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { StoreModule } from '@ngrx/store';


import { AppComponent }   from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {HeaderComponent} from './../app/components/header/header.component';
import {FooterComponent} from './../app/components/footer/footer.component';
import {HomeComponent} from './../app/components/home/home.component';
import {SetEndPointComponent} from './../app/components/setEndPoint/setEndPoint.component';


const appRoutes: Routes = [

];

import { counterReducer } from './reducer/counter';

@NgModule({
  imports:      [
        BrowserModule,
        AppRoutingModule,
        /**
         * StoreModule.provideStore is imported once in the root module, accepting a reducer
         * function or object map of reducer functions. If passed an object of
         * reducers, combineReducers will be run creating your application
         * meta-reducer. This returns all providers for an @ngrx/store
         * based application.
         */
        StoreModule.provideStore({counter:counterReducer})
   ],
  declarations: [
       AppComponent,
       HeaderComponent,
       FooterComponent,
       HomeComponent,
       SetEndPointComponent
    ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
