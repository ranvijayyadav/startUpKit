import { Component, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
interface AppState {
  counter: number;
}

@Component({
  selector: 'micro-service',
  templateUrl:`./app/components/microService/microService.component.html`
})
export class MicroServiceComponent {
    constructor(){

    }
}
