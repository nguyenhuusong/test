import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainNavComponent } from './navbar/main-nav/main-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './navbar/side-nav/side-nav.component';
import { SearchBarComponent } from './navbar/search-bar/search-bar.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DataTableComponent } from './data-table/data-table.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SideNavComponent,
    SearchBarComponent,
    DataTableComponent,
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
