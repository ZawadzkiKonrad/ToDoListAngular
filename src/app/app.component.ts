import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoListKurs';

  tasksList= new Array<string>();
  doneList= new Array<string>();


  addTask(task:string){
    this.tasksList.push(task);
    //console.log(this.tasksList);
  }

  removeTask(index:number){
    this.tasksList.splice(index,1);

  }

  doneTask(index:number){
    var task= this.tasksList[index];
    console.log(task);
    this.doneList.push(task);
    this.removeTask(index);
   // console.log(this.doneList);
  }
}
