import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManageUserService } from '../../services/manage-user.service';
import { SignUpRequest } from '../../entity/signup-request';
import { finalize, map } from 'rxjs';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Create user component
 */
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  signUpForm: FormGroup
  loading = false

  constructor(private formBuilder: FormBuilder, private manage: ManageUserService,
    private messageService: MessageService){
    this.signUpForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  signUp(){
    this.loading = true
    this.signUpForm.disable()
    this.manage.signUp(this.signUpForm.value as SignUpRequest)
    .pipe(
      finalize(()=>{
        this.loading = false
        this.signUpForm.enable()
      })
    )
    .subscribe({
      next: (_) =>{
        this.messageService.add({
          severity: "success",
          summary: "Usuario creado"
        })
      },
      error: (e: HttpErrorResponse)=>{
        if(e.status === 409){
          this.messageService.add({
            severity: "error",
            summary: "El usuario o correo ya existen"
          })
        }else{
          this.messageService.add({
            severity: "error",
            summary: e.message
          })
        }
      }
    })
  }
}
