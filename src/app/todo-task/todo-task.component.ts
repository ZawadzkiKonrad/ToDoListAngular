import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  tasksList=new Array<string>();

  @Output()
  emitDone= new EventEmitter<number>();
  @Output()
  emitRemove= new EventEmitter<number>();

  remove(index:number){
    this.emitRemove.emit(index);
  }

  done(index:number){
    this.emitDone.emit(index);
  }

}
