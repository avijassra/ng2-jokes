import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// components
import { AppComponent } from './app.component';
import { JokeContainerComponent } from './jokes/jokes-container.component';
import { JokeListComponent } from './jokes/jokes.component';
import { JokeComponent } from './joke/joke.component';
import { CreateJokeComponent } from './createJoke/createJoke.component';
import { ParentDiContainerComponent } from './parentDi/parent-container.component';
import { ChildDiComponent } from './childDi/child-di.component';
import { ParentDiComponent } from './parentDi/parent-di.component';
// directive
import { CardHoverDirective } from './directives/cardHover.directive';
//Service
import { SimpleService } from './services/simple.service';

const routes: Routes = [
    { path: 'jokes', component: JokeContainerComponent },
    { path: 'di-test', component: ParentDiContainerComponent },
    { path: '', redirectTo: 'jokes', pathMatch: 'full' },
];

@NgModule({
    bootstrap: [ 
        AppComponent 
    ],
    imports: [ 
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [ 
        AppComponent,
        JokeContainerComponent,
        JokeListComponent,
        JokeComponent,
        CreateJokeComponent,
        CardHoverDirective,
        ParentDiContainerComponent,
        ParentDiComponent,
        ChildDiComponent
    ],
    providers: [
        SimpleService
    ],
})
export class AppModule { }