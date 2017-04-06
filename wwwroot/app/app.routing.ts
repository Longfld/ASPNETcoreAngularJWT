import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './Login/login.component';
import { SecretComponent } from './secret/secret.component';
import { AuthService} from './shared/auth.service'

const appRoutes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'secret', component: SecretComponent, canActivate: [ AuthService] }
];


export const routing = RouterModule.forRoot(appRoutes);