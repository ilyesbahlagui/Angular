import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header-component.html',
  styleUrls: [ './todo-list-header-component.css' ],
})
export class TodoListHeaderComponent {
  titreHeader='TP TODO LIST';
  isActive = true;

  // constructor() {
  //   setTimeout(() => {
  //     this.isActive = true;
  //   }, 2000);
  // }
}