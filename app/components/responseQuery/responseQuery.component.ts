import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
interface AppState {
  counter: number;
}

@Component({
  selector: 'responseQuery',
  templateUrl:`./app/components/responseQuery/responseQuery.component.html`
})
export class responseQueryComponent {
    dataFormat:any={
        "RootQuery1" : {
            "Query" : "Select ABC, count(*) cnt from xyz group by ABC",
            "RollDownQuery" : {
                "SQ1" : {
                    "Query" : "Select *",
                    "RollDownQuery" : {}
                }
            }
        },
        "RootQuery2" : {
            "Query" : "Select * from xyz3",
            "RollDownQuery" : {}
        },
        "RootQueryN" : {
            "Query" : "Select * from xyz3",
            "RollDownQuery" : {}
        }
    }

    constructor(){

    }
}
