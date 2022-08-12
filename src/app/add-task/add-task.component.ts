import { EmitterVisitorContext } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor() {
    this.newTask='';
   }

  ngOnInit(): void {
  }
  @Output()
  emitTask=new EventEmitter<string>();

  newTask:string;

  add(){
    this.emitTask.emit(this.newTask);
  }

}
