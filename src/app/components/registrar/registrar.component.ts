import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  user : User = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  registrarUser(){
    this.userService.postUsers(this.user).subscribe(data => { console.log(data)})
    this.router.navigate(['/vista']);
  }

}
