import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "./shared/auth.service";

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent { 
    constructor(private authService: AuthService, private router: Router) {}

    public logout(){
        sessionStorage.clear();
        this.router.navigate(["login"]);
    }
}