import { Component } from '@angular/core';
import { SimpleService } from '../services/simple.service';

@Component({
    moduleId: module.id,
    selector: 'parent-di-container',
    template: `
        <div class="row" >
            <div class="col-xs-6" >
                <parent-di></parent-di>
            </div>
            <div class="col-xs-6" >
                <parent-di></parent-di>
            </div>
        </div>
    `
})
export class ParentDiContainerComponent {
    constructor(private service: SimpleService) { }
}