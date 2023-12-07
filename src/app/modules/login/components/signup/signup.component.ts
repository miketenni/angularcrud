import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm!:FormGroup;

  constructor(private fb:FormBuilder,private service:AuthService){}
  ngOnInit(){
    this.initialForm();
  }
  initialForm(){
    this.signupForm=this.fb.group({
      userName:['',Validators.required],
      userEmail:['',Validators.required],
      userPassword:['',Validators.required],
      userRepassword:['',Validators.required]
    })
  }

  get userName(){
    return this.signupForm.get('userName');
  }
  get userEmail(){
    return this.signupForm.get('userEmail');
  }
  get userPassword(){
    return this.signupForm.get('userPassword');
  }
  get userRepassword(){
    return this.signupForm.get('userRepassword');
  }
  submit(){
    let signupvalues=this.signupForm.value;
    let postData={
      userName:signupvalues.userName,
      userEmail:signupvalues.userEmail,
      userPassword:signupvalues.userPassword,
      userRepassword:signupvalues.userRepassword,
      isActive:true,
    }
    this.service.signupApi(postData).subscribe((data)=>{
      console.log(data)
    })
  }
}
