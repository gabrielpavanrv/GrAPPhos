import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InicioPage } from '../pages/inicio/inicio';
import { ComponentsModule } from '../components/components.module';
import { VideoPlayer } from '@ionic-native/video-player';
import { HttpClient } from '@angular/common/http';
import { GrafoGeralProvider } from '../providers/grafo-geral/grafo-geral';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    InicioPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    InicioPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VideoPlayer,
    GrafoGeralProvider,
  ]
})
export class AppModule {}
