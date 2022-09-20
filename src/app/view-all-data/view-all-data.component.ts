import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-view-all-data',
  templateUrl: './view-all-data.component.html',
  styleUrls: ['./view-all-data.component.css']
})
export class ViewAllDataComponent implements OnInit {

  constructor(private registerService:RegisterService,private router:Router,private router1:ActivatedRoute) { }

  id:number | any;
  userList: User[] | any;
  userList1: User[] | any;
  //user:User=new User();
  ngOnInit(): void {
    this.getAllData();
    //this.getDropDown();
    this.id=this.router1.snapshot.params['id'];
    this.deleteUser(this.id);
  }
  getAllData(){
    this.registerService.findAllRegisterUser().subscribe(data=>{
        this.userList=data;
        this.getRouter();
    })
  }
  getRouter(){
    this.router.navigate(['/view']);
  }
  updateUser(id:number){
    this.router.navigate(['/update',id])
  }

  deleteUser(id:number){
    this.registerService.deleteUser(id).subscribe(data=>{
      //this.userList=data;
      this.getAllData();
    })
    this.router.navigate(['/view'])
  }

  // getDropDown(){
  //   this.registerService.getDropdownData().subscribe(res=>{
  //     this.userList=res;
  //     alert(res);
  //   })
  // }
}
