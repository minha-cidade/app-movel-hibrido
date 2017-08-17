import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { EmailComposer } from '@ionic-native/email-composer';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';

import { GastometroService } from '../services/gastometro.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VoceSabiaPage } from '../pages/voce-sabia/voce-sabia';
import { OrcamentoPage } from '../pages/orcamento/orcamento';
import { GastometroPage } from '../pages/gastometro/gastometro';
import { ReclameAquiPage } from '../pages/reclame-aqui/reclame-aqui';
import { EducacionalPage } from '../pages/educacional/educacional';
import { LocalidadePage } from '../pages/localidade/localidade';

import { PopoverPage } from '../pages/popover/popover';
import { SobreModal } from '../pages/sobre/sobre';
import { ReclamacaoModal } from '../pages/reclame-aqui/reclamacao/reclamacao';
import { InformacaoReclameAquiModal } from '../pages/reclame-aqui/informacoes/informacoes';
import { GastosModal } from '../pages/gastometro/gastos/gastos';
import { GastosGeralModal } from '../pages/gastometro/geral/geral';
import { ComparativoVoceSabiaModal } from '../pages/voce-sabia/comparativo/comparativo';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VoceSabiaPage,
    OrcamentoPage,
    GastometroPage,
    ReclameAquiPage,
    EducacionalPage,
    LocalidadePage,
    SobreModal,
    ComparativoVoceSabiaModal,
    GastosModal,
    ReclamacaoModal,
    InformacaoReclameAquiModal,
    GastosGeralModal,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VoceSabiaPage,
    OrcamentoPage,
    GastometroPage,
    ReclameAquiPage,
    EducacionalPage,
    LocalidadePage,
    SobreModal,
    ComparativoVoceSabiaModal,
    GastosModal,
    ReclamacaoModal,
    InformacaoReclameAquiModal,
    GastosGeralModal,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    GastometroService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
