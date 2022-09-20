import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  user:User=new User;
  constructor(private regisetrService:RegisterService,private route:Router) { }

  ngOnInit(): void {
  }

  getData(){
   // console.log(this.user);
    this.regisetrService.registerUser(this.user).subscribe(data=>{
      alert("Successfully User is Registred");
    // this.route.navigate(['/view']);
    },error=>{
      alert(" User is Not Registred");
    });
    
  }
  
}
