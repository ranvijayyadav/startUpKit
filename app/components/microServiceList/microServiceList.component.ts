import { Component } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

@Component({
    selector: 'micro-service-list',
    templateUrl: `./app/components/microServiceList/microServiceList.component.html`
})

export class MicroServiceListComponent{
    serviceList:any=[1,2,3,4];
    constructor(){

    }
}


