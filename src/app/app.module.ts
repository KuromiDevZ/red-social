import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  // Solo componentes, directivas y pipes van aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Los módulos van aquí
  ],
  providers: [
    provideClientHydration(withEventReplay()) // Servicios y proveedores van aquí
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
