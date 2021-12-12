import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
var jobs:any
var image:any
@Component({
  selector: 'app-workeraccout',
  templateUrl: './workeraccout.page.html',
  styleUrls: ['./workeraccout.page.scss'],
})
export class WorkeraccoutPage implements OnInit {
  joblist=[];
 workerForm:FormGroup
 files=''
  count: Object;

  constructor(public router: Router, public formbuilder: FormBuilder,public toastController: ToastController,public alertController: AlertController) { 
    this.workerForm = this.formbuilder.group({
      job_category: ['', [Validators.required]],
      job_start_time: ['', [Validators.required]],
      job_end_time: ['', [Validators.required]],
      job_salary: ['', [Validators.required]],
      job_verification: ['', [Validators.required]],
       //job_document: ['', [Validators.required]],
      job_description: ['', [Validators.required]],
      keyid:['',Validators.required]
  });
}
get job_category(){
  return this.workerForm.get('job_category');
}
get job_start_time(){
  return this.workerForm.get('job_start_time');
}
get job_end_time(){
  return this.workerForm.get('job_end_time');
}
get job_salary(){
  return this.workerForm.get('job_salary');
}
get job_verification(){
  return this.workerForm.get('job_verification');
}
// get job_document(){
//   return this.workerForm.get('job_document');
// }
get job_description(){
  return this.workerForm.get('job_description');
}
get keyid(){
  return this.workerForm.get('keyid');
}
async encodeImageFileAsURL() {
  console.log("err")
  console.log("err")
  var fileExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
  var filesSelected = document.getElementById("inputFileToLoad")["files"];
  var fileInput = document.getElementById('inputFileToLoad');
  var filePath = fileInput["value"];
  var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
  if(!allowedExtensions.exec(filePath)){
      // alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
      fileInput["value"] = '';
     // return false;
      const toast = await this.toastController.create({
        message: 'Please upload file having extensions .jpeg/.jpg/.png/.gif only.',
        duration: 2000
      });
      toast.present();
  
    }
    else{
      console.log(filesSelected.length)
      if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];
  
        var fileReader = new FileReader();
  
        fileReader.onload = function(fileLoadedEvent) {
          var srcData = fileLoadedEvent.target["result"]; // <--- data: base64
          image=srcData;
          console.log(image)
        }
        fileReader.readAsDataURL(fileToLoad);
      }
    }
}
public submit(){
  console.log(this.workerForm.value);
 
}

  ngOnInit() {
    
  }

}
