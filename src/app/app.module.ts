import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrltesterComponent } from './urltester/urltester.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MonitorInterceptor } from './monitor.interceptor';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    UrltesterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ 
    provide: HTTP_INTERCEPTORS, 
    useClass: MonitorInterceptor, 
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
