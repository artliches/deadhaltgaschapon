import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GashaponComponent } from './gashapon/gashapon.component';
import { ModsrollerComponent } from './modsroller/modsroller.component';
import { MalfunctionsrollerComponent } from './malfunctionsroller/malfunctionsroller.component';
import { GlitchesrollerComponent } from './glitchesroller/glitchesroller.component';

@NgModule({
  declarations: [
    AppComponent,
    GashaponComponent,
    ModsrollerComponent,
    MalfunctionsrollerComponent,
    GlitchesrollerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
