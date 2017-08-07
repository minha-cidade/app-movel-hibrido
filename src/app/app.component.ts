import { Component, ViewChild } from '@angular/core';
import { Platform, ModalController, Nav, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { VoceSabiaPage } from '../pages/voce-sabia/voce-sabia';
import { OrcamentoPage } from '../pages/orcamento/orcamento';
import { GastometroPage } from '../pages/gastometro/gastometro';
import { ReclameAquiPage } from '../pages/reclame-aqui/reclame-aqui';
import { EducacionalPage } from '../pages/educacional/educacional';
import { LocalidadePage } from '../pages/localidade/localidade';
import { SobreModal } from '../pages/sobre/sobre';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  pages: Array<{ title: String, component: any, icon: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              public modalCtrl: ModalController, public storage: Storage,  public loadingCtrl: LoadingController) {
    this.initializeApp();

    this.storage.get('localidade-done').then(done => {
      if(!done) {
        this.rootPage = LocalidadePage;
      } else {
        this.rootPage = HomePage;
      }
    });

    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Orçamento', component: OrcamentoPage, icon: 'logo-usd' },
      { title: 'Gastômetros', component: GastometroPage, icon: 'timer'},
      { title: 'Educacional', component: EducacionalPage, icon: 'bookmarks' },
      { title: 'Você sabia?', component: VoceSabiaPage, icon: 'md-bulb' },
      { title: 'Reclame aqui', component: ReclameAquiPage, icon: 'megaphone' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    if(page.component == GastometroPage) {
      this.presentLoading();
    }
    this.nav.setRoot(page.component);
  }

  openSobreModal() {
    let mod = this.modalCtrl.create(SobreModal);
    mod.present();
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Aguarde ...",
      duration: 2000
    });
    loader.present();
  }
}
