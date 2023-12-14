import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../tasks.service';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  public tasks: Task[] = [];
  public newTask: Task = {};
  
  constructor(
    private taskService: TasksService
  ){

  }
  addTask(): void {
    if (this.newTask.title == undefined) {
    return;
  }
  this.newTask.completed = false;
  this.newTask.archived = false;

  this.tasks.unshift(this.newTask);

  this.taskService.post(this.newTask).subscribe((task:Task):void => {
    this.newTask ={};
    this.ngOnInit();
  })
}
  ngOnInit(): void {
    this.taskService.index().subscribe((tasks: Task[]) : void =>{
      this.tasks = tasks;
    }

    )
  }

  canAddTask(): boolean{
    if(this.newTask.title != undefined && this.newTask.deadline != undefined){
      return true;
    }

    return false;
  }
  canArchiveCompled(): boolean{
    for (const task of this.tasks) {
      if (task.completed) {
        return true;
      }
    }
    return false;
  }
  handleChange(task: Task):void{
    this.taskService.put(task).subscribe({
      error: err =>{
        alert(err);
        this.ngOnInit
      }
    })
  }
  archiveCompleted():void{
    const observables: Observable<any>[]=[];
    for(const task of this.tasks){
      if(!task.completed){
        continue;
      }
      task.archived = true;
      observables.push(this.taskService.put(task));

      forkJoin(observables).subscribe(():void =>{
        this.ngOnInit();
      })
    }
  }
}
