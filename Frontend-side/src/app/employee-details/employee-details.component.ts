import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy{
  page=1;
  totalPokemons: number | undefined; 
  constructor(private userService:LoginService,private router: Router,private renderer: Renderer2){}
  ngOnDestroy(): void {
    
    this.renderer.removeStyle(document.body, 'background-image');
  }
  ngOnInit(): void {
    this.getAllUsers();
    this.renderer.setStyle(document.body, 'background-image', 'none');
  }






allUsers:any;
  getAllUsers()
{
  this.userService.getAllUsers().subscribe(response=>{
  this.allUsers=response;
  this.totalPokemons = this.allUsers.employees.length;
  console.log(this.allUsers);

  })
}



delete(id: string) {
  this.userService.deleteEmployeeById(id).subscribe((data) => {

    this.allUsers=data;
    this.getAllUsers();
    Swal.fire({
      icon: 'success',
      title: 'Delete Successfully',
      text: 'The Employee was deleted successfully.',
    });
  });
}

}
