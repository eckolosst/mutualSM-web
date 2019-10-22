import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material';
import { SharedModule } from './shared/shared.module';
import { TerrenoSubsystemModule } from './views/terreno-subsystem/terreno-subsystem.module';
import { PrestamoSubsystemModule } from './views/prestamo-subsystem/prestamo-subsystem.module';
import { CommonsModule } from './views/commons/commons.module';
import { HttpClientModule } from '@angular/common/http';
import { ResolverSolicitudComponent } from './views/solicitud-prestamo/resolver-solicitud/resolver-solicitud.component';

@NgModule({
  declarations: [AppComponent, ResolverSolicitudComponent],
  imports: [
    MatSidenavModule,
    TerrenoSubsystemModule,
    PrestamoSubsystemModule,
    CommonsModule,
    SharedModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
