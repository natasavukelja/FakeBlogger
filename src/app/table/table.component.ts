import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';
import { MatDialog } from '@angular/material/dialog';
import { AddFormComponent } from '../add-form/add-form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  bloggData: any;
  allBloggData: any;
  constructor(private http: HttpService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.http.getPosts().subscribe((data)=>{
      this.bloggData = data;
      this.allBloggData = data;
    })
 
  }

  delete(id){
    this.http.delete(id).subscribe((data)=>{
      console.log(data);
      
    })
  }
  edit(id){
    this.http.getPost(id).subscribe((data)=>{
      let dialogRef = this.dialog.open(AddFormComponent, {
        height: '450px',
        data:{
          value:data,
           mode:'edit'
          },
        width: '600px',
      });
    })
  }

  change(event){
    console.log(event.target.value);
    this.bloggData = this.allBloggData;
    this.bloggData = this.bloggData.filter((post)=> post.title.includes(event.target.value));
  }
}
