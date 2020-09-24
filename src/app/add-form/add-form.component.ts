import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpService } from '../http.service';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  addForm = this.fb.group({
    userId: [''],
    title: [''],
    body: [''],


  });
  constructor(private fb: FormBuilder, private http: HttpService, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data.value) {
      this.addForm.controls.userId.setValue(this.data.value.userId);
      this.addForm.controls.title.setValue(this.data.value.title);
      this.addForm.controls.body.setValue(this.data.value.body);

    }
  }

  send() {
    if (this.data.mode == 'new') {
      this.http.create(this.addForm.value).subscribe((data) => {
        console.log(data);
      })
    }
    if (this.data.mode == 'edit') {
      this.http.edit(this.addForm.value.id, this.addForm.value).subscribe((data) => {
        console.log(data);
      })
    }

  }
  close() {
    this.dialog.closeAll();
  }
}
