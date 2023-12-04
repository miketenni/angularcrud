import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!:FormGroup;
  constructor(private router: Router,private fb:FormBuilder) { }

  ngOnInit(){
    this.initialForm();
  }

  initialForm(){
    this.loginForm=this.fb.group({
      userEmail:['',Validators.required],
      userPassword:['',Validators.required, Validators.minLength(4)]
    })
  }

  get userEmail() {
    return this.loginForm.get('userEmail');
  }
  get userPassword() {
    return this.loginForm.get('userPassword');
  }
  
  onsubmit(){
    console.log(this.loginForm.value)
  }
}
