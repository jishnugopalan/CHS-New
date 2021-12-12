import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  activatedRouter: any;
  passwordForm: any;
  first=true
  second=false
  pass1=''
  pass2=''
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  constructor(private FormBuilder: FormBuilder,private router:Router,public toastController:ToastController) {
    this.passwordForm = this.FormBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      repassword: ['', [Validators.required, Validators.minLength(8)]]
    });
   }

   hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
}

  get otp(){
    return this.otpForm.get('otp');
  }
  get password(){
    return this.passwordForm.get('password');
  }
  get repassword(){
    return this.passwordForm.get('repassword');
  }
  public errorMessages1 = {
    password: [
      { type: 'required', message: 'password is required' },
      { type: 'minlength', messages: 'password cannot be longer than 8 charetors' }
    ],
    repassword: [
      { type: 'required', message: 'password is required' },
      { type: 'minlength', messages: 'password cannot be longer than 8 charetors' }
    ],
    
  };
  
 
 

  public errorMessages = {
    otp: [
      { type: 'required', message: 'otp is required' },
      { type: 'maxlength', messages: 'Name cannot be longer than 4 charetors' }
    ],
    
  };
  otpForm = this.FormBuilder.group({
    otp: ['', [Validators.required, Validators.maxLength(4),Validators.minLength(4)]],
   
   // otp: ['', [Validators.required, Validators.minLength(4)]]
    
  });

  
  public submit(){
  
    
     

  }
  public async submitpassword(){
    console.log(this.passwordForm.get('password')) 
  

  }

  ngOnInit() {
  }

}
