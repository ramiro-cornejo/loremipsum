import { Component } from '@angular/core';
import { User } from '../../interfaces/users';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {
  usersList: User[] = [
    {
      nombre: 'Ramiro',
      apellido: 'Cornejo',
      email: 'ramiro@gmail.com',
      rol: 'Developer'
    },
    {
      nombre: 'Lautaro',
      apellido: 'Gomez',
      email: 'lautaro@gmail.com',
      rol: 'Developer'
    },
    {
      nombre: 'Lucia',
      apellido: 'Perez',
      email: 'lucia@gmail.com',
      rol: 'Developer'
    }
  ]

  userListFiltered: User[] = this.usersList
  
  filterUsers(text: string): void {
    this.userListFiltered = this.usersList.filter(user => user.apellido.toLowerCase().includes(text.toLowerCase()))
  }
}
