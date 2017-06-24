import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages: Array<{ title: String, component: any, icon: string }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Comparativo', component: null, icon: 'trending-up' },
      { title: 'Educacional', component: null, icon: 'bookmarks' },
      { title: 'Você sabia?', component: null, icon: 'md-bulb' },
      { title: 'Período de vacas magras', component: null, icon: 'basket' },
      { title: 'Sobre', component: null, icon: 'information-circle' }
    ];
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}

