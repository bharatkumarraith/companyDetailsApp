import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/services/login.service';
import { RegistrationComponent } from '../registration/registration.component';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private fb:FormBuilder,private authService : LoginService,private matDialog:MatDialog,private router: Router) {}


  livestream = this.fb.group({
  
    email: ['', [Validators.required, Validators.maxLength(100)]],
 
    password:['',[Validators.required]],
  
 

});
get email() { return this.livestream.get("email") }
get password() { return this.livestream.get("password") }






onSubmit()
{
  console.log(this.livestream.value);
  this.authService.logincheck(this.livestream.value).subscribe(
    response=>{
      console.log(response);
  
      Swal.fire({
        title: `Sucessfully LoggedIn`,
        icon: 'success'
      });
    }
    
  )
  this.router.navigate(['/employee']);
  
 this.livestream.reset();

}
  
  signup()
  {
  
    this.matDialog.open(RegistrationComponent,{
      width:'350px',
    })
  
  }
  
  
}
