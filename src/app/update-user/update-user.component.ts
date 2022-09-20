import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router, private userService:RegisterService) { }
  id:number | any;
  userUpdate:User=new User();
  ngOnInit(): void {
    this.abc();
  }
  abc(){
    this.id=this.router.snapshot.params['id'];
    this.userService.UpdateUserById(this.id).subscribe(data=>{
     // alert("data is :" + data);
     // console.warn(data)
      this.userUpdate=data;
    },error=>{
      console.log(error);
    }
    );
  }
  getUpdateData()
{
  this.id=this.router.snapshot.params['id'];
  this.userService.updateUser(this.id,this.userUpdate).subscribe(data=>{
    this.route.navigate(['/view']);
  },error=>{
    console.log(error);
  }
  );
}  
}
