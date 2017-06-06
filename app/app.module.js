"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
// components
var app_component_1 = require("./app.component");
var jokes_container_component_1 = require("./jokes/jokes-container.component");
var jokes_component_1 = require("./jokes/jokes.component");
var joke_component_1 = require("./joke/joke.component");
var createJoke_component_1 = require("./createJoke/createJoke.component");
var parent_container_component_1 = require("./parentDi/parent-container.component");
var child_di_component_1 = require("./childDi/child-di.component");
var parent_di_component_1 = require("./parentDi/parent-di.component");
// directive
var cardHover_directive_1 = require("./directives/cardHover.directive");
//Service
var simple_service_1 = require("./services/simple.service");
var routes = [
    { path: 'jokes', component: jokes_container_component_1.JokeContainerComponent },
    { path: 'di-test', component: parent_container_component_1.ParentDiContainerComponent },
    { path: '', redirectTo: 'jokes', pathMatch: 'full' },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot(routes)
        ],
        declarations: [
            app_component_1.AppComponent,
            jokes_container_component_1.JokeContainerComponent,
            jokes_component_1.JokeListComponent,
            joke_component_1.JokeComponent,
            createJoke_component_1.CreateJokeComponent,
            cardHover_directive_1.CardHoverDirective,
            parent_container_component_1.ParentDiContainerComponent,
            parent_di_component_1.ParentDiComponent,
            child_di_component_1.ChildDiComponent
        ],
        providers: [
            simple_service_1.SimpleService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map