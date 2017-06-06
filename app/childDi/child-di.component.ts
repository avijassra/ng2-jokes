import { Component } from '@angular/core';
import { SimpleService } from '../services/simple.service';

@Component({
    moduleId: module.id,
    selector: 'child-di',
    template: `
        <div class="child" >
            <p>Child DI</p>
            {{ service.value }}
        </div>
    `
})
export class ChildDiComponent {
    constructor(private service: SimpleService) { }
}