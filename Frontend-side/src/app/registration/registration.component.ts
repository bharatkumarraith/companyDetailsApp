import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {


  constructor(private fb:FormBuilder,private userService:LoginService,private router: Router){}
  livestream = this.fb.group({
  
    email: ['', [Validators.required, Validators.maxLength(100)]],
    username:['',[Validators.required,Validators.minLength(2)]],
    password:['',[Validators.required]],
    dob: ['', [Validators.required]],
 

});
get email() { return this.livestream.get("email") }
get username() { return this.livestream.get("username") }
get password() { return this.livestream.get("password") }
get dob() { return this.livestream.get("dob") }





onSubmit()
{
  console.log(this.livestream.value);
  const usernameValue = this.livestream.value.username;
  this.userService.addUser(this.livestream.value).subscribe(
    response=>{
      console.log(response);
      Swal.fire({
        title: `Welcome To Quantum IT Innovation, ${usernameValue}`,
        icon: 'success'
      });

    }
    
  )
  this.router.navigate(['/login']);
  
 this.livestream.reset();

}


hidePassword = true;

togglePasswordVisibility(event: Event) {
  // event.preventDefault();
  // this.hidePassword = !this.hidePassword;
}

}
