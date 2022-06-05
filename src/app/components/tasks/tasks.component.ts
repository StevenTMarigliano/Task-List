import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Task[] = [];

  inputTask:string = "";

  constructor() { }

  ngOnInit(): void {
    this.tasks = [
      {
        content: 'Example task',
        completed: false
      },

      {
        content: 'Example task',
        completed: false
      }
    ]

  }
    toggleDone (id : number) {
      this.tasks.map((v, i) => {
        if (i == id) v.completed = !v.completed;
        
        return v;
      })
    }

    removeTask(id : number) {
      this.tasks = this.tasks.filter((v, i) => i != id);
    }

    addTask () {
      this.tasks.push({
        content: this.inputTask,
        completed: false
      });
    
      this.inputTask = "";
    }

}
