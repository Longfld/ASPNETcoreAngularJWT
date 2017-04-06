//import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import 'rxjs/Rx';
import 'hammerjs/hammer';


platformBrowserDynamic().bootstrapModule(AppModule);
