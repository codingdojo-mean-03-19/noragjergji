import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service'
import { Task } from "./task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks API';
  tasks: Task[] = [];

  constructor(private _httpService: HttpService){  
  }
  ngOnInit(){
    this.getTasksFromService()
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log('Got the data', data)
      this.tasks = data['tasks'];
    })
  }
}