import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Task} from "./task";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
    private http: HttpClient,
  ) { }

  public index(archived = false): Observable<Task[]> {
    const url = 'http://localhost:48322/todos';
    return this.http.get<Task[]>(url, {
      params: {
        archived: archived,
        _sort: 'id',
        _order: 'desc',
      }
    })
  }

  public post(task: Task): Observable<Task> {
    const url = 'http://localhost:48322/todos';
    return this.http.post(url,task);

    
  }

  public put(task: Task): Observable<Task> {
    const url = 'http://localhost:48322/todos/' +task.id;
    return this.http.put(url,task);
  }

  public delete(task: Task): Observable<any> {
    const url = 'http://localhost:48322/todos/' +task.id;
    return this.http.delete(url);
  }
}