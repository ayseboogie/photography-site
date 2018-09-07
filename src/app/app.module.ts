import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModulesPro} from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader} from 'ng-uikit-pro-standard';

import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { FamiliesComponent } from './families/families.component';
import { HomeComponent } from './home/home.component';
import { MusiciansComponent } from './musicians/musicians.component';
import { OutdoorsComponent } from './outdoors/outdoors.component';
import { PortraitsComponent } from './portraits/portraits.component';
import { RealestateComponent } from './realestate/realestate.component';
import { TravelsComponent } from './travels/travels.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule} from './app.routing';
import { LightboxModule} from 'ngx-lightbox';
import { TestyComponent } from './testy/testy.component';

const appRoutes: Routes = [
  { path: 'home',      component: HomeComponent },
  { path: 'aboutme',      component: AboutmeComponent },
  { path: 'families',      component: FamiliesComponent },
  { path: 'musicians',      component: MusiciansComponent },
  { path: 'outdoors',      component: OutdoorsComponent },
  { path: 'portraits',      component: PortraitsComponent },
  { path: 'realestate',      component: RealestateComponent },
  { path: 'travels',      component: TravelsComponent },
  { path: 'weddings',      component: WeddingsComponent },
  { path: 'contact',      component: ContactComponent },


  { path: 'testy',      component: TestyComponent },
  { path: '',          redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    ContactComponent,
    FamiliesComponent,
    HomeComponent,
    MusiciansComponent,
    OutdoorsComponent,
    PortraitsComponent,
    RealestateComponent,
    TravelsComponent,
    WeddingsComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    TestyComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModulesPro.forRoot(),
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    LightboxModule
  ],

  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
