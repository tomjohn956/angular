import { ComplaintService } from './../complaint.service';
import { Complaint } from './../complaint';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-complaint-registration',
  templateUrl: './complaint-registration.component.html',
  styleUrls: ['./complaint-registration.component.css']
})
export class ComplaintRegistrationComponent implements OnInit {
  complaint:Complaint = new Complaint();
  complaintForm: any = FormGroup;
  categoryOfIssue: any = ['Payment Issues', 'Bill Issues', 'Other Issues'];
  subCategoryOfIssue: any = ['Transaction Failure', 'Technical Failure', 'Authorization Error'];
  public userFile: any = File;

  constructor(private complaintService: ComplaintService) {}

  ngOnInit() {
    this.complaintForm = new FormGroup({
       'uniqueServiceNumber' : new FormControl(null, Validators.required),
       'categoryOfIssue': new FormControl('',Validators.required),
       'subCategoryOfIssue': new FormControl('',Validators.required),
       'name' : new FormControl(null, Validators.required),
     'emailAddress' : new FormControl(null, [Validators.required, Validators.email]),
     'password' : new FormControl(null, [Validators.required,Validators.minLength(8),Validators.maxLength(16)]),
     'mobileNumber' : new FormControl(
       null,
       [
         Validators.required,
         Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
       ]),
  });
  }
  // constructor(private fb: FormBuilder, private complaintService: ComplaintService)
  // {
  //   this.complaintForm = this.fb.group({
  //     'uniqueServiceNumber' : new FormControl(null, Validators.required),
  //      'categoryOfIssue': new FormControl('',Validators.required),
  //      'subCategoryOfIssue': new FormControl('',Validators.required),
  //      'name' : new FormControl(null, Validators.required),
  //    'emailAddress' : new FormControl(null, [Validators.required, Validators.email]),
  //    'password' : new FormControl(null, [Validators.required,Validators.minLength(8),Validators.maxLength(16)]),
  //    'mobileNumber' : new FormControl(
  //      null,
  //      [
  //        Validators.required,
  //        Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
  //      ]),
  //    });
  // }
  onSelectFile(event:any)
  {
    const file = event.target.files[0];
    console.log(file);
    this.userFile = file;
  }
  // saveForm(complaintForm: FormGroup)
  // {
  //   if(complaintForm.valid)
  //   {
  //     const complaint = complaintForm.value;
  //     const formData = new FormData();
  //     formData.append('complaint',JSON.stringify(complaint));
  //     formData.append('file',this.userFile);
  //     this.complaintService.complaintRegister(formData).subscribe((response) => {
  //       console.log(response);
  //     });
  //   } else{
  //     this.validateFormFields(complaintForm);
  //   }
  // }
  // validateFormFields(complaintForm: FormGroup)
  // {
  //   Object.keys(complaintForm.controls).forEach(field => {
  //     const control = complaintForm.get(field);
  //     if(control instanceof FormControl){
  //       control.markAsTouched({onlySelf: true});
  //     }
  //     else if (control instanceof FormGroup){
  //       this.validateFormFields(control);
  //     }
  //   })
  // }
  changeCategoryOfIssue(e: any) {
    this.categoryOfIssue?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  changeSubCategoryOfIssue(e: any) {
    this.subCategoryOfIssue?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  complaintRegister()
    {
      console.log(this.complaint);
     this.complaintService.complaintRegister(this.complaint).subscribe(data=>{
        alert("Complaint registered succesfully")
      },error=>alert("Sorry complaint not registered"));

    

  }

  clicksub() {
    console.log(this.complaintForm.value);
    this.complaintForm.reset();
  }
  





 


}
