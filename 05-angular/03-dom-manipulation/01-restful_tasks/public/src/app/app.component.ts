import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks API';
  tasks = [];

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

  allTasks(tasks): void { 
    console.log(`Click event is working`);
    let observable = this._httpService.postTasks({data: tasks});
    observable.subscribe(data => console.log("Got our data!", data));
  }
}
