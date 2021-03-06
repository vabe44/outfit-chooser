import { AuthGuardGuest } from './services/auth-guard-guest.service';
import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt/angular2-jwt';
import { AuthGuard } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { BrowserXhr, RequestOptions } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { CustExtBrowserXhr } from '../cust-ext-browser-xhr';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { WardrobeService } from './services/wardrobe.service';
import { ClothesService } from './services/clothes.service';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { WardrobeComponent } from './wardrobe/wardrobe.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WardrobeItemComponent } from './wardrobe-item/wardrobe-item.component';
import { BusinessCasualMaleSvgComponent } from './business-casual-male-svg/business-casual-male-svg.component';
import { Home2Component } from './home2/home2.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export function getAuthHttp(http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token'
  }), http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NotFoundComponent,
    NoAccessComponent,
    WardrobeComponent,
    NavbarComponent,
    WardrobeItemComponent,
    BusinessCasualMaleSvgComponent,
    Home2Component,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: LandingPageComponent, canActivate: [AuthGuardGuest] },
      { path: 'home', component: Home2Component, canActivate: [AuthGuard] },
      { path: 'home2', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'wardrobe', component: WardrobeComponent, canActivate: [AuthGuard] },
      { path: 'wardrobe/:outfitId', component: WardrobeItemComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: SignupComponent },
      { path: 'no-access', component: NoAccessComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    ClothesService,
    WardrobeService,
    AuthService,
    AuthGuard,
    AuthGuardGuest,
    AuthHttp,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http, RequestOptions]
    },
    // CORS
    {provide: BrowserXhr, useClass: CustExtBrowserXhr},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
