import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormBuilder, Validators } from '@angular/forms'
import { ReturnStatement } from '@angular/compiler';
import { BreakpointObserver,Breakpoints} from '@angular/cdk/layout'
import { WebRequestsService } from '../../services/web-requests.service'
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';


@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  objects=this.data.dobjects;

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.objects.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  remove(obj:String): void {
    const index = this.objects.indexOf(obj);

    if (index >= 0) {
      this.objects.splice(index, 1);
    }
  }

  dname= this.fb.group({
    Dataset_name:[this.data.name,Validators.required,],
    select_type:[{value:this.data.dtype,disabled:true},Validators.required],
    instruction:[this.data.dinstruction,Validators.required],
    object:[null]
  });

  select_types=['image annotation', 'image classfication'];

  constructor(public dialogref:MatDialogRef<UpdateDialogComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: any, 
              private fb:FormBuilder,
              private dataset:WebRequestsService) { }

  oncancelclick(){
    this.dialogref.close();
  }
  onsubmit(){
    if(this.dname.invalid && this.objects==[])
    {
      this.dname.controls.object.setErrors({required:true})
      return;
    }
    else {
      this.dataset.updateDataset({"title":this.dname.value.Dataset_name,"Instruction":this.dname.value.instruction,"type":this.dname.value.select_type,"objects":this.objects}).subscribe((res)=>{
        console.log(res);
        this.dialogref.close();
      })
    }
  }



  ngOnInit(): void {
  }

}
