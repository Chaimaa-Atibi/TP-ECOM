import {APP_INITIALIZER, ApplicationRef, DoBootstrap, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import {KeycloakSecurityService} from './services/keycloak-security.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RequestInterceptorService} from './services/request-interceptor.service';

/*export function KcFactory(kcSecurity: KeycloakSecurityService) {
  return ()=> kcSecurity.init();
}*/
const secService=new KeycloakSecurityService();

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SuppliersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [
    {provide:KeycloakSecurityService, useValue:secService},
    //{provide:APP_INITIALIZER, deps:[KeycloakSecurityService],useFactory:KcFactory, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:RequestInterceptorService, multi:true}
  ],
  //bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap{
  ngDoBootstrap(appRef: ApplicationRef): void {
    secService.init()
      .then(authenticated=>{
      console.log(authenticated);
      appRef.bootstrap(AppComponent)
    }).catch(err=>{
      console.log(err);
    });
  }
}
