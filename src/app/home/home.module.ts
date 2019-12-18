import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { DriversComponent } from './home/drivers/drivers.component';
import { DocumentsComponent } from './home/documents/documents.component';



@NgModule({
  declarations: [HomeComponent, AuthComponent, DriversComponent, DocumentsComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
