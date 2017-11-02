import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from "../shared/auth.service";

@Component({
    moduleId: module.id,
    selector: "my-login",
    template: `
        <div class="card-wide mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title">
                <h2 class="mdl-card__title-text">login</h2>
            </div>
        </div>
          <div class="card-wide mdl-card mdl-shadow--2dp">
          <table>
    <tr>
        <td>user name:</td>
        <td><input [(ngModel)]="userName" placeholder="user1" matTooltip="Enter User Name" matTooltipPosition="right" /></td>
    </tr>
    <tr>
        <td>password:</td>
        <td><input [(ngModel)]="password" placeholder="user1psd"  matTooltip="Enter Password" matTooltipPosition="right" /></td>
    </tr>
    <tr>
        <td></td>
        <td><button mat-raised-button color="primary"  (click)="login()" >Login</button></td>
    </tr>
</table>
          </div>
    `
})

export class LoginComponent implements OnDestroy {

    private userName: string;
    private password: string;
    private postStream$: Subscription;

    constructor(private authService: AuthService,private router: Router) { }

    login() {
        if (this.postStream$) { this.postStream$.unsubscribe }

        this.postStream$ = this.authService.login$(this.userName, this.password).subscribe(
            result => {
                if (result.state == 1) {
                    this.router.navigate(["home"]);
                } else {
                    alert(result.msg);
                }
            }
        )
    }

     ngOnDestroy() {
         if(this.postStream$){this.postStream$.unsubscribe()}
     }
}
