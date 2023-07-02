import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainNavComponent } from './navbar/main-nav/main-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './navbar/side-nav/side-nav.component';
import { SearchBarComponent } from './navbar/search-bar/search-bar.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AgGridModule } from 'ag-grid-angular';
import { TuyendungComponent } from './tuyendung/tuyendung.component';
import { AuthInterceptorService } from 'src/app/share/intercept.service';
import { AgGridComponent } from './share/ag-grid/ag-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SideNavComponent,
    SearchBarComponent,
    TuyendungComponent,
    AgGridComponent,
  ],
  imports: [
    BrowserModule,
    MenuModule,
    BrowserAnimationsModule,
    MenubarModule,
    BreadcrumbModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    AgGridModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
