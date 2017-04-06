import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/auth.service";
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    characters: string[];

    constructor(private authService: AuthService, private router: Router) { }
    ngOnInit() {
        if (this.authService.checkLogin()) {
            this.authService.authGet$("/api/Values/GetStaff").subscribe(
                characters => this.characters = characters
            );
        } else {
            this.router.navigate(["login"]);
        }
    }
}
