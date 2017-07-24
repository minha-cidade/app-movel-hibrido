import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VoceSabiaPage } from '../pages/voce-sabia/voce-sabia';
import { OrcamentoPage } from '../pages/orcamento/orcamento';
import { GastometroPage } from '../pages/gastometro/gastometro';

import { GastosModal } from '../pages/gastometro/gastos/gastos';
import { ComparativoVoceSabiaModal } from '../pages/voce-sabia/comparativo/comparativo';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VoceSabiaPage,
    OrcamentoPage,
    GastometroPage,
    ComparativoVoceSabiaModal,
    GastosModal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VoceSabiaPage,
    OrcamentoPage,
    GastometroPage,
    ComparativoVoceSabiaModal,
    GastosModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
