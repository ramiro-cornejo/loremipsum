import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './users-page/users-page.component';
import { UsersTableComponent } from './users-table/users-table.component';



@NgModule({
  declarations: [
    UsersPageComponent,
    UsersTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
