import { Component, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './../../reducer/counter';

interface AppState {
  counter: number;
}

@Component({
  selector: 'header',
  templateUrl:`./app/components/header/header.component.html`
})


export class HeaderComponent {
    counter: Observable<number>;

    constructor(private store: Store<AppState>){
        this.counter = store.select('counter');
    }

    increment(){
        this.store.dispatch({ type: INCREMENT });
    }

    decrement(){
        this.store.dispatch({ type: DECREMENT });
    }

    reset(){
        this.store.dispatch({ type: RESET });
    }
}
