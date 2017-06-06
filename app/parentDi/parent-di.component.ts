import { Component } from '@angular/core';
import { SimpleService } from '../services/simple.service';

@Component({
    moduleId: module.id,
    selector: 'parent-di',
    template: `
        <div class="parent" >
            <p>Parent DI</p>
            <form novalidation>
                <div class="form-group" >
                    <input type="text" class="form-control" name="value" [(ngModel)]="service.value" >
                </div>
            </form>
            <child-di></child-di>
        </div>
    `
})
export class ParentDiComponent {
    constructor(private service: SimpleService) { }
}