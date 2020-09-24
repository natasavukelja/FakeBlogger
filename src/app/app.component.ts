import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddFormComponent } from './add-form/add-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FakeBlogger';

  constructor(public dialog: MatDialog){

  }
  openDialog(){
    let dialogRef = this.dialog.open(AddFormComponent, {
      height: '450px',
      data:{
        mode:'new'
      },
      width: '600px',
    });
  }
}
