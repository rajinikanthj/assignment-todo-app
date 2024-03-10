import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: Task = {
    title: '',
    userId: '',
    completed: false
  }
  @Output() updateEvent : EventEmitter<Task> = new EventEmitter();
  @Output() deleteEvent : EventEmitter<Task> = new EventEmitter();

  update(task : Task) {
    this.updateEvent.emit(task);
  }

  remove(task : Task) {
    this.deleteEvent.emit(task)
  }
  
}
