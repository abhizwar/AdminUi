import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouting } from './app-routing';

import { AppComponent } from './app.component';
import { AdminTableComponent } from './admin-table/admin-table/admin-table.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './admin-table/pagination/pagination.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AdminTableComponent, PaginationComponent],
  imports: [BrowserModule, AppRouting, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
