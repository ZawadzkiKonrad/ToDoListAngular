import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  doneList= new Array<string>();

}
