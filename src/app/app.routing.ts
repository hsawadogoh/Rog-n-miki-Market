import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import {HomeComponent} from './home/home.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {AProposComponent} from './a-propos/a-propos.component';
import {BoutiquesComponent} from './boutiques/boutiques.component';
import {ContactComponent} from './contact/contact.component';
import {TendancesComponent} from './tendances/tendances.component';
import {ProfilComponent} from './profil/profil.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'index',                component: ComponentsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'examples/landing',     component: LandingComponent },
    { path: 'examples/login',       component: LoginComponent },
    { path: 'examples/profile',     component: ProfileComponent },
    { path: 'home', component: HomeComponent},
    { path: 'signin', component: SigninComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'a-propos', component: AProposComponent},
    { path: 'boutiques', component: BoutiquesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'tendances', component: TendancesComponent },
    { path: 'profil', component: ProfilComponent }
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
