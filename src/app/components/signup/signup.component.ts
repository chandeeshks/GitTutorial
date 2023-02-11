import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  constructor(private auth: AuthService) {}
  
  ngOnInit(): void {
      
  }

  signupform = new FormGroup({
  
    fname : new FormControl("",[Validators.required]),
    lname : new FormControl("",[Validators.required]),
    email : new FormControl("",[Validators.required]),
    password : new FormControl("",[Validators.required]),
    mobilenumber : new FormControl("",[Validators.required])
    
  })

  Submittedsignup(){
    this.auth.signupform(this.signupform.value).subscribe((res:any)=>{
     
      alert("submitted");
      
    })
  }
   
  get Fname(): FormControl{
    return this.signupform.get('fname') as FormControl;
  }
  get Lname(): FormControl{
    return this.signupform.get('lname') as FormControl;
  }
  get Email(): FormControl{
    return this.signupform.get('email') as FormControl;
  }
  get Password(): FormControl{
    return this.signupform.get('password') as FormControl;
  }
  get MobileNumber(): FormControl{
    return this.signupform.get('mobilenumber') as FormControl;
  }
}
