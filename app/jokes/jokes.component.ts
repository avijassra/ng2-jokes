import { Component } from '@angular/core';
import { IJoke, Joke } from '../joke/joke';

@Component({
    moduleId: module.id,
    selector: 'joke-list',    
    template: `
        <create-joke (jokeCreate)="addJokeToDisplay($event)"></create-joke>
        <hr />
        <joke *ngFor="let j of jokes" [joke]="j" ></joke>
    `
})
export class JokeListComponent {
    jokes: IJoke[] = [
        new Joke("Why Does orange stopped rolling down the hill", "It ran out of juice"),
        new Joke("Why did the skeleton not go to the party?", "He had no-body to go with.")
    ];

    addJokeToDisplay(joke: IJoke): void {
        this.jokes.unshift(joke);
    }
}