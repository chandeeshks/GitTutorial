import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor(private auth: AuthService){}


  ngOnInit(): void {
    

    }

    loginform = new FormGroup({
      email : new FormGroup("",[Validators.required, Validators.email]),
      pwd : new FormGroup("",[Validators.required])
    })

    submittedlogin()
    {
       this.auth.loginform(this.loginform.value).subscribe(res=>{
        alert("login successful");
       })
    }
    
    get Email(): FormControl{
      return this.loginform.get('email') as FormControl;
    }

    get Password(): FormControl{
      return this.loginform.get('pwd') as FormControl;
    }
  
  
}
