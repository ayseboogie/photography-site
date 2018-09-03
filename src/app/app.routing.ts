import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {AboutmeComponent} from './aboutme/aboutme.component';
import {FamiliesComponent} from './families/families.component';
import {MusiciansComponent} from './musicians/musicians.component';
import {OutdoorsComponent} from './outdoors/outdoors.component';
import {PortraitsComponent} from './portraits/portraits.component';
import {RealestateComponent} from './realestate/realestate.component';
import {TravelsComponent} from './travels/travels.component';
import {WeddingsComponent} from './weddings/weddings.component';
import {ContactComponent} from './contact/contact.component';


const routes: Routes = [
  { path: 'home',      component: HomeComponent },
  { path: 'aboutme',      component: AboutmeComponent },
  { path: 'families',      component: FamiliesComponent },
  { path: 'musicians',      component: MusiciansComponent },
  { path: 'outdoors',      component: OutdoorsComponent },
  { path: 'portrait',      component: PortraitsComponent },
  { path: 'realestate',      component: RealestateComponent },
  { path: 'travels',      component: TravelsComponent },
  { path: 'weddings',      component: WeddingsComponent },
  { path: 'contact',      component: ContactComponent },
  { path: '',          redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
