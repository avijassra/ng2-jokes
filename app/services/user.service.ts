import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    Post(data: object) : any {
        let url = 'api/user';
        return this.http
                    .post(url, data)
                    .subscribe(res => console.log(res));
    }
}