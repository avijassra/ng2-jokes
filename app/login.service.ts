import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoginService {
    constructor(private http: Http) { }

    private loginUrl = 'http://localhost:5000/api/Login';

    validateUser (body: Object): Observable<any> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
debugger;
        return this.http.post(this.loginUrl, body, options) // ...using post request
                         .map(this.responseCallback) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }  

    private responseCallback(res: Response) {
        debugger;
        return res.json();
    }
}