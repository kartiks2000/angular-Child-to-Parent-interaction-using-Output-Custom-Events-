import { Component,Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child-cmp',
    templateUrl: './child.component.html'
})
export class childComponent{

    na = "";

    @Output() sendingname = new EventEmitter();

    changing = (event) => {
        this.na = event.target.value;
        this.sendingname.emit(this.na);
    }

}