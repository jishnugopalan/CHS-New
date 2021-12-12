import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.page.html',
  styleUrls: ['./addcategory.page.scss'],
})
export class AddcategoryPage implements OnInit {

  jobForm:FormGroup
  constructor(private formBuilder: FormBuilder,private router:Router,public toastController: ToastController) { 

   this.jobForm = this.formBuilder.group({
      category: ['', [Validators.required, Validators.maxLength(100)]],
      
    });
  }
  get category(){
    return this.jobForm.get('category');
  }
  public errorMessages = {
    category: [
      { type: 'required', message: 'category is required' },
      { type: 'maxlength', messages: 'Name cannot be longer than 100 charetors' }
    ],
    
  };

  public submit(){
    console.log(this.jobForm.value)
    
  }

  ngOnInit() {
  }

}
