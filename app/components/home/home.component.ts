import { Component, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
interface AppState {
  counter: number;
}

@Component({
  selector: 'home',
  templateUrl:`./app/components/home/home.component.html`
})
export class HomeComponent {
    constructor(){

    }
}
