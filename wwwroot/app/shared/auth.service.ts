import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, distinctUntilChanged, debounceTime, catchError } from 'rxjs/operators'

import { AuthBearer } from './AuthBearerInterface';

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
        let options = { headers: header };

        return this.http.put<AuthBearer>("/api/TokenAuth/Login", body, options).pipe(
            debounceTime(200),
            distinctUntilChanged(),
            map(
                res => {
                    let result = res;
                    if (result.state && result.state == 1 && result.data && result.data.accessToken) {
                        sessionStorage.setItem(this.tokeyKey, result.data.accessToken);
                    }
                    return result;
                }
            ),

            catchError(this.handleError<AuthBearer>("login"))
        )
    }

    public authGet$(url) {
        let header = this.initAuthHeaders();
        let options = { headers: header };
        return this.http.get<any>(url, options).pipe(
            debounceTime(200),
            distinctUntilChanged(),
            catchError(this.handleError<any>("authGet")));
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

        return this.http.post(url, body, { headers: headers }).pipe(
            debounceTime(200),
            distinctUntilChanged(),
            catchError(this.handleError("authPost"))
        )
    }

    private getLocalToken(): string {
        return sessionStorage.getItem(this.tokeyKey);
    }

    private initAuthHeaders(): HttpHeaders {
        let token = this.getLocalToken();
        if (token == null) throw "No token";

        let headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set("Authorization", "Bearer " + token);
        return headers;
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(`${operation} error: ${error.message}`);
            return of(result as T);
        };
    }
}
