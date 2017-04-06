import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/auth.service";

@Component({
    template: `
        <div class="card-wide mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title">
                <h2 class="mdl-card__title-text">Secret</h2>
            </div>
            <div class="mdl-card__supporting-text">
                You can get source code here: https://github.com/Longfld/ASPNETcoreAngularJWT
            </div>
            <div class="mdl-card__supporting-text">
                 <h1>Hi <span>{{userName}}</span></h1>
            </div>
        </div>
    `
})
export class SecretComponent implements OnInit {

    userName: string;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.authService.getUserInfo$().subscribe(
            res => {
                if (res != null && res.data) {
                    let thisuser = res.data
                    if (thisuser && thisuser.userName) {
                        this.userName = thisuser.userName;
                    }
                }
            });
    }
}
