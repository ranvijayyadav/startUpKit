import { Component, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
interface AppState {
  counter: number;
}

@Component({
  selector: 'data-source',
  templateUrl:`./app/components/dataSource/dataSource.component.html`
})
export class DataSourceComponent {
    isQuerySelected:boolean=false;
    isMicroServiceSelected:boolean=false;

    constructor(){

    }
    microServiceHandler(){
        this.typeSelection(false, true)
        //this.isQuerySelected=false;
        //this.isMicroServiceSelected=true;
    }

    queryHandler(){
        this.typeSelection(true, false);
        //this.isMicroServiceSelected=false;
        //this.isQuerySelected=true;
    }

    cancelHandler(){
        this.typeSelection(false, false)
    }

    validateHandler(){

    }

    saveHandler(){
        this.typeSelection(false, false)
    }

    typeSelection(isQuery,isMicro){
        this.isMicroServiceSelected=isMicro;
        this.isQuerySelected=isQuery;
    }
}
