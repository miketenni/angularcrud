import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../shared/auth/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!:FormGroup;
  val:any;
  email: any;
  password: any;
  constructor(private router: Router,
    private fb:FormBuilder,private service:AuthService) { }

  ngOnInit(){
    this.initialForm();
  }

  initialForm(){
    this.loginForm=this.fb.group({
      userEmail:['',Validators.required],
      userPassword:['',Validators.required, ]
    })
  }

  get userEmail() {
    return this.loginForm.get('userEmail');
  }
  get userPassword() {
    return this.loginForm.get('userPassword');
  }
  
  onsubmit(){
    if(this.loginForm.value.userEmail === ""){
      Swal.fire({
        icon: "error",
        title: "email can not be empty",
        text: "Something went wrong!",
      });
    }else if(this.loginForm.value.userPassword === ""){
      Swal.fire({
        icon: "error",
        title: "password can not be empty",
        text: "Something went wrong!",
      });
    }
    this.getSignupData();
  }
  getSignupData(){
    this.service.loginApi().subscribe((data)=>{
      this.val=data;
      this.email=this.val.find((data:any)=>{return data.userEmail === this.loginForm.value.userEmail});
      this.password=this.val.find((data:any)=>{return data.userPassword === this.loginForm.value.userPassword});
        
        if(this.email?.['userEmail'] === this.loginForm.value.userEmail 
        && this.password?.['userPassword'] === this.loginForm.value.userPassword &&
        this.email?.['id'] === this.password?.['id']){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          }).then((result)=>{if(result){ this.router.navigate(['admin']);}})
        }else if(this.email?.['userEmail'] === undefined || this.password?.['userPassword'] === undefined){
          Swal.fire({
            icon: "error",
            title: "user not signed up please signup",
            text: "Something went wrong!",
          });
        }
    })
  }
}
