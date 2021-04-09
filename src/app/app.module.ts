import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchProgramComponent } from './launch-program/launch-program.component';

import { LoaderInterceptorService } from './utils/interceptors/loader-interceptor.service';
import { LoaderComponent } from './common/loader/loader.component';
import { HttpErrorInterceptorService } from './utils/interceptors/http-error-interceptor.service';
import { NotFoundPageComponent } from './common/loader/not-found-page/not-found-page.component';
import { ImageLazyLoadModule } from './utils/directives/image-lazy-load.module';

@NgModule({
  declarations: [
    AppComponent,
    LaunchProgramComponent,
    LoaderComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    ImageLazyLoadModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true },
  {provide: HTTP_INTERCEPTORS,useClass: HttpErrorInterceptorService,multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
