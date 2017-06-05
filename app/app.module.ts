import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { JokeListComponent } from './jokes/jokes.component';
import { JokeComponent } from './joke/joke.component';
import { CreateJokeComponent } from './createJoke/createJoke.component';
// providers
import { LoginService } from './login.service';

@NgModule({
    bootstrap: [ 
        AppComponent 
    ],
    imports: [ 
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    declarations: [ 
        AppComponent,
        JokeListComponent,
        JokeComponent,
        CreateJokeComponent
    ],
    providers: [
      LoginService
  ],
})
export class AppModule { }