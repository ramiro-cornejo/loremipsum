import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/users';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {
  @Input() tableUsers: User[] = [];
}
