import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { PendientesComponent } from '../pages/pendientes/pendientes.component';
import { TerminadosComponent } from '../pages/terminados/terminados.component';
import { AgregarComponent} from '../pages/agregar/agregar.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {DeseosServicio} from '../services/deseos.service';

import {FiltroCompletadoPipe} from '../pipes/filtro-completado/filtro-completado';

import {ListasComponent} from '../components/listas.component';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent,
    FiltroCompletadoPipe,
    ListasComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],

  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TabsPage,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeseosServicio,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
