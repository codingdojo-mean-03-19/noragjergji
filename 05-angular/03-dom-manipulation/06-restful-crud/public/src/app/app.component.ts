import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Task } from './models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks CRUD ';
  newTask: any;
  task = new Task();
  editTask = new Task();
  tasks: Task[] = [];
  edit = false;
  editingTask: object;


  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getTasks();
  }

  onRegister(event: Event, form: NgForm) {
    event.preventDefault();

    console.log('Submitting', this.task);
    this.tasks.push(this.task);
    const taskkk = this.task;
    this.registerTask(this.task);
    this.task = new Task();
    form.reset();
  }

  getTasks() {
    const tasks_observable = this._httpService.getTasks();

    tasks_observable.subscribe(data => {
      this.tasks = data['tasks'];
    });
  }

  registerTask(task) {
    const task_obervable = this._httpService.registerTask({ task });
    task_obervable.subscribe(data => {
    });
  }

  getEditTask(id) {
    const taskObservable = this._httpService.getTask(id);
    taskObservable.subscribe(data => {
      this.edit = true;
      this.editingTask = data.task;
    });
  }

  onEditing(event: Event, form: NgForm) {
    event.preventDefault();
    this.updateTask(this.editingTask);
 }

  updateTask(editTask) {
    const editObservable = this._httpService.editTask({ editTask });
    editObservable.subscribe(data => {
    });
  }
}