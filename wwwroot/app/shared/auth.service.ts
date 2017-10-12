import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders} from "@angular/common/http";
import { Router, CanActivate } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import {AuthBearer} from './AuthBearerInterface';

@Injectable()
export class AuthService implements CanActivate {
    private tokeyKey = "token";

    constructor(private http: HttpClient, private router: Router) { }

    public canActivate() {
        if (this.checkLogin()) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }

    public login$(userName: string, password: string) {
        let header = new HttpHeaders().set('Content-Type', 'application/json');
        let body = JSON.stringify({ "Username": userName, "Password": password });
        let options = {headers:header};

        return this.http.put<AuthBearer>("/api/TokenAuth/Login", body, options).map(
            res => {
                let result = res;
                if (result.state && result.state == 1 && result.data && result.data.accessToken) {
                    sessionStorage.setItem(this.tokeyKey, result.data.accessToken);
                }
                return result;
            }
        ).shareReplay().catch(this.handleError);
    }

    public authGet$(url) {
        let header = this.initAuthHeaders();
        let options = {headers:header};
        return this.http.get(url, options).shareReplay().catch(this.handleError);
    }

    public checkLogin(): boolean {
        let token = sessionStorage.getItem(this.tokeyKey);
        return token != null;
    }

    public getUserInfo$() {
        return this.authGet$("/api/TokenAuth").shareReplay();
    }

    public authPost$(url: string, body: any) {
        let headers = this.initAuthHeaders();
        return this.http.post(url, body, { headers: headers }).shareReplay().catch(this.handleError);
    }

    private getLocalToken(): string {
           return sessionStorage.getItem(this.tokeyKey);
    }

    private initAuthHeaders(): HttpHeaders {
        let token = this.getLocalToken();
        if (token == null) throw "No token";

        let headers = new HttpHeaders()
                        .set('Content-Type','application/json')
                        .set("Authorization", "Bearer " + token);
        return headers;
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message : "Server error";
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}

