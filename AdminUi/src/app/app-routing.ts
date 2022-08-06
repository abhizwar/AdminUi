import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AdminTableComponent } from './admin-table/admin-table/admin-table.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminTableComponent,
  },
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full',
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {}
