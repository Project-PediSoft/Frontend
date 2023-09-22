import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ErrorRoutingModule } from './error-routing.module';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule,
    ButtonModule
  ]
})
export class ErrorModule { }
