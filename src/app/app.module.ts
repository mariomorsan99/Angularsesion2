import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Catalogo1Component } from './components/catalogo1/catalogo1.component';
import { Catalogo2Component } from './components/catalogo2/catalogo2.component';
import { HomeComponent } from './components/home/home.component';
import { ProductoService } from './servicios/producto.service';
import { ItemProductoComponent } from './components/item-producto/item-producto.component';
import { LoginComponent } from './components/login/login.component';

//google
import {  GoogleLoginProvider, SocialLoginModule  } from "angularx-social-login";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Catalogo1Component,
    Catalogo2Component,
    HomeComponent,
    ItemProductoComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false, //keeps the user signed in
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('865808430601-t1oejdpt2de1uapp48klvgfj5ctc271t.apps.googleusercontent.com') // your client id
          }
        ]
      }
    },
    ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
