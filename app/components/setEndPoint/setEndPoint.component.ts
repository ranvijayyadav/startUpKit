import { Component, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
interface AppState {
  counter: number;
}

@Component({
  selector: 'setEndPoint',
  templateUrl:`./app/components/setEndPoint/setEndPoint.component.html`
})
export class SetEndPointComponent {
    constructor(){

    }
}
