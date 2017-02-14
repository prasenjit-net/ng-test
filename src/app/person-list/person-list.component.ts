import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons = [
  { id: 1, name: 'person 1' },
  { id: 2, name: 'person 2' },
  { id: 3, name: 'person 3' },
  { id: 4, name: 'person 4' },
  { id: 5, name: 'person 5' },
  { id: 6, name: 'person 6' }];

  constructor() { }

  ngOnInit() {
  }

}
