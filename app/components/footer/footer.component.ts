import { Component, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './../../reducer/counter';

interface AppState {
  counter: number;
}

@Component({
  selector: 'footer',
  templateUrl:`./app/components/footer/footer.component.html`
})
export class FooterComponent {
    counter: Observable<number>;
    constructor(private store: Store<AppState>){
        this.counter = store.select('counter');
    }
}
