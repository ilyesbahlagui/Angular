import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list-main',
  templateUrl: './todo-list-main-component.html',
  styleUrls: ['./todo-list-main-component.css'],
})
export class TodoListMainComponent {
  titreMain = 'Todo List';
  gitURL = 'https://github.com/ilyesbahlagui';

  isActive = false;

  // methodes
  changeColor() {
  
    this.isActive = true;
  }
}
