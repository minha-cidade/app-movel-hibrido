import { Component, ViewChild } from '@angular/core';
import { Platform, ModalController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { VoceSabiaPage } from '../pages/voce-sabia/voce-sabia';
import { OrcamentoPage } from '../pages/orcamento/orcamento';
import { GastometroPage } from '../pages/gastometro/gastometro';
import { ReclameAquiPage } from '../pages/reclame-aqui/reclame-aqui';
import { SobreModal } from '../pages/sobre/sobre';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages: Array<{ title: String, component: any, icon: string }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public modalCtrl: ModalController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Orçamento', component: OrcamentoPage, icon: 'logo-usd' },
      { title: 'Gastômetros', component: GastometroPage, icon: 'timer'},
      { title: 'Educacional', component: null, icon: 'bookmarks' },
      { title: 'Você sabia?', component: VoceSabiaPage, icon: 'md-bulb' },
      { title: 'Reclame aqui', component: ReclameAquiPage, icon: 'megaphone' }
    ];
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  openSobreModal() {
    let mod = this.modalCtrl.create(SobreModal);
    mod.present();
  }
}

