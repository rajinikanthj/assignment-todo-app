import { Component } from '@angular/core';
import { Task } from '../../task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-taks',
  templateUrl: './taks.component.html',
  styleUrl: './taks.component.css'
})
export class TaksComponent {

  tasks : Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
     // console.log(tasks)
      this.tasks = tasks.slice(0, 16)
    });
  }

  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task))
  }

  updateReminder(task : Task){
    task.completed = !task.completed;
    this.taskService.updateTaskReminder(task).subscribe()
  }

  deleteTask(task : Task){
    this.tasks = this.tasks.filter(t => t.id !== task.id)
    this.taskService.updateTaskReminder(task).subscribe()
  }

 

}
