import { Injectable } from "@angular/core";
import { Headers, Http, Response, RequestOptions } from "@angular/http";

import { Router, CanActivate } from '@angular/router';

import { Observable } from 'rxjs/Observable';
//import { RequestResult } from "./RequestResult";

@Injectable()
export class AuthService implements CanActivate {
    private tokeyKey = "token";

    constructor(private http: Http, private router: Router) { }

    public canActivate() {
        if (this.checkLogin()) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }

    public login$(userName: string, password: string) {
        let header = new Headers({ 'Content-Type': 'application/json' });
        let body = JSON.stringify({ "Username": userName, "Password": password });
        let options = new RequestOptions({ headers: header });

        return this.http.put("/api/TokenAuth/Login", body, options).map(
            res => {
                let result = res.json();
                if (result.state == 1 && result.data && result.data.accessToken) {
                    sessionStorage.setItem(this.tokeyKey, result.data.accessToken);
                }
                return result;
            }
        ).catch(this.handleError);
    }

    public authGet$(url) {
        let headers = this.initAuthHeaders();
        let options = new RequestOptions({ headers: headers });
        return this.http.get(url, options).map(
            response => response.json()
        ).catch(this.handleError);
    }

   

    public checkLogin(): boolean {
        let token = sessionStorage.getItem(this.tokeyKey);
        return token != null;
    }

    public getUserInfo$() {
        return this.authGet$("/api/TokenAuth");
    }

    public authPost$(url: string, body: any) {
        let headers = this.initAuthHeaders();
        return this.http.post(url, body, { headers: headers }).map(response => response.json()).catch(this.handleError);
    }

    private getLocalToken(): string {
           return sessionStorage.getItem(this.tokeyKey);
    }

    private initAuthHeaders(): Headers {
        let token = this.getLocalToken();
        if (token == null) throw "No token";

        let headers = new Headers();
        headers.append("Authorization", "Bearer " + token);
        return headers;
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
