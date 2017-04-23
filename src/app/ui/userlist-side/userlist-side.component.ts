import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/iuser';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-userlist-side',
  templateUrl: './userlist-side.component.html',
  styleUrls: ['./userlist-side.component.css']
})
export class UserlistSideComponent implements OnInit {
  users:IUser[]=[];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getAll()
    .subscribe(users =>{
      this.users=users;
    });

  }
}
