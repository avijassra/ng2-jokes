import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',    
    template: `
        <div class="container">
            <joke-list></joke-list>
        </div>
    `,
})
export class AppComponent { 
    constructor(private loginService: LoginService) { }

    onUserLogin(value: any): void {
        debugger;
        let resp = this.loginService.validateUser({username: value.controls.username.value, lastname: value.controls.lastname.value});
        alert(resp)
    }
}