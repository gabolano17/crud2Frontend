import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit, OnDestroy {

  users: User[] = []
  suscription: Subscription = new Subscription();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();

    this.suscription = this.userService.refresh.subscribe(() => {
      this.getUsers();
    })
  }

  ngOnDestroy(): void {
      this.suscription.unsubscribe();
      console.log("Observable cerrado")
  }

  getUsers(){
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  editarUser(id: number){
    this.router.navigate(['/editar', id]);
  }

  eliminarUser(id: number){
    this.userService.deleteUser(id).subscribe(data => {this.getUsers()});
  }

}
