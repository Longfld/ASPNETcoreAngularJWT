import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MyMaterialModule} from './my.material.moudule'
import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { SecretComponent } from './secret/secret.component';
import { AuthService } from "./shared/auth.service";

import 'hammerjs/hammer';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        MyMaterialModule,
        routing
    ],
    providers: [AuthService],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        LoginComponent,
        SecretComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
