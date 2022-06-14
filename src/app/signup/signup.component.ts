// import { HintQuestion } from './../hint-question';
import { SignupService } from './../signup.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from '../user';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isSubmitted = false;
  hintQuestion: any = ['your birth place', 'your favourite food', 'your pet animal'];
  signupForm: any = FormGroup;
  user:User = new User();
  // hintQuestion:HintQuestion[] = [];
  // hintSelected:Number=1;

  constructor(private signupService: SignupService,private modalService: ModalService) {}

  ngOnInit() {
    // this.hintQuestion=[
    //   {Id:1,Name:"your birth place"},
    //   {Id:2,Name:"your favourite food"},
    //   {Id:3,Name:"your pet animal"}
    // ];
    // this.hintSelected=1;
    this.signupForm = new FormGroup({
      'username' : new FormControl(null, Validators.required),
      'name' : new FormControl(null, Validators.required),
    'emailAddress' : new FormControl(null, [Validators.required, Validators.email]),
    'confirmEmailAddress' : new FormControl(null, [Validators.required, Validators.email]),
    'address' : new FormControl(null, Validators.required),
    'password' : new FormControl(null, [Validators.required,Validators.minLength(8),Validators.maxLength(16)]),
    'confirmPassword' : new FormControl(null, [Validators.required,Validators.minLength(8),Validators.maxLength(16)]),
    'mobileNumber' : new FormControl(
      null,
      [
        Validators.required,
        Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
      ]),
      'hintAnswer': new FormControl(null),
      'hintQuestion': new FormControl('',Validators.required)
    });
  }
    changeHintQuestion(e: any) {
      this.HintQuestion?.setValue(e.target.value, {
        onlySelf: true,
      });
    }

  
    get HintQuestion() {
      return this.signupForm.get('hintQuestion');
    }
  


  userSignup()
  {
    console.log(this.user);
    this.signupService.signupUser(this.user).subscribe(data=>{
      alert("User registered succesfully")
    },errorRes=>{
      this.modalTittle="Error";
        this.displayModal="block";
        this.modalText=errorRes;
    });

  }
  displayModal:string='';
  modalTittle:string='';
  modalText:string='';

  get username() {
    return this.signupForm.get('username');
  }
  get name() {
    return this.signupForm.get('name');
  }
  get mobileNumber() {
    return this.signupForm.get('mobileNumber');
  }
  get emailAddress() {
    return this.signupForm.get('emailAddress');
  }
  get confirmEmailAddress() {
    return this.signupForm.get('confirmEmailAddress');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }
  get address()
  {
    return this.signupForm.get('address');
  }
  get hintAnswer()
  {
    return this.signupForm.get('hintAnswer');
  }
  // get hintQuestion()
  // {
  //   return this.signupForm.get('hintQuestion');
  // }
  // public selectedHint: HintQuestion = this.hintQuestion[0];
  // onSelect(hintQuestion.Id) {
  //   this.selectedHint = null;
  //   for (var i = 0; i < this.hintQuestion.length; i++) {
  //     if (this.hintQuestion[i].Id == hintQuestion.Id) {
  //       this.selectedHint = this.hintQuestion[i];
  //     }
  //   }
  // }
  clicksub() {
    console.log(this.signupForm.value);
    this.signupForm.reset();
  }

}
