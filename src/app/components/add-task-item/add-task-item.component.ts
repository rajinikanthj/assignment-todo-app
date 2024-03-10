import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'app-add-task-item',
  templateUrl: './add-task-item.component.html',
  styleUrl: './add-task-item.component.css'
})
export class AddTaskItemComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
   
  showAddTask : boolean = false;
  title : string = "";
  userId : string = "";
  completed : boolean = false ;
  
  addTask(){

   const task : Task = {
        title : this.title,
        userId : this.userId,
        completed : this.completed
   }

   this.onAddTask.emit(task)

  }

  toggleAddTask(showAddTask : boolean){
    this.showAddTask = showAddTask
  }

}
