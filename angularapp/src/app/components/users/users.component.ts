import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'Chad',
        lastName: 'Bob',
        age: 22,
        address: {
          street: '20 blue heron rise',
          city: 'Stanmore Bay',
          state: 'North'
        }
      },
      {
        firstName: 'Mitch',
        lastName: 'Nigger',
        age: 23,
        address: {
          street: '69 Newcastle street',
          city: 'NewCastle',
          state: 'NSW'
        }
      },
      {
        firstName: 'Danyal',
        lastName: 'Smith',
        age: 21,
        address: {
          street: '201 Queens Street',
          city: 'Auckland',
          state: 'CBD'
        }
      }
    ];

    this.loaded = true;

    this.addUser({
      firstName: 'Sam',
      lastName: 'John'
    });

  }

  addUser(user: User) {
    this.users.push(user);
  }

}
