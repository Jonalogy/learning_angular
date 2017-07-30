import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'addTodo',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  onAddHandler(task) {
    console.log(task);
    return false;
  }
}
