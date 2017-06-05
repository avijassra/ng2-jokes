import { Component, Input } from '@angular/core';
import { IJoke } from '../joke/joke';

@Component({
    moduleId: module.id,
    selector: 'joke',
    template: `
        <div>
            <div class="card card-block">
                <div class="card-title">
                    <h1>{{joke.setup}}</h1>
                </div>
                <div class="card-text" [hidden]="joke.hide">
                    <p>{{joke.punchline}}</p>
                </div>
                <div>
                    <button class="btn btn-warning" (click)="joke.togglePunchline()">Toggle</button>
                </div>
            </div>
            <div class="row" style="min-height:5px" ></div>
        </div>
    `
})
export class JokeComponent {
    @Input() joke: IJoke;
}