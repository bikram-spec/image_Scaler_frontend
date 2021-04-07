import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, Validators } from '@angular/forms'
import { ReturnStatement } from '@angular/compiler';
import { BreakpointObserver,Breakpoints} from '@angular/cdk/layout'
import { WebRequestsService } from '../../services/web-requests.service'
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';




@Component({
  selector: 'app-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  styleUrls: ['./add-project-dialog.component.css']
})
export class AddProjectDialogComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  objects=[];
  
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
    Dataset_name:[null,Validators.required],
    select_type:[null,Validators.required],
    instruction:[null,Validators.required],
    object:[null]
  });
  select_types=['image segementation', 'image classfication'];
/*   cards= [{titile:"demo",subtitle:"first item",description:"welcome to the first item and enjoy ",row:1,col:1},
          {titile:"demo",subtitle:"first item",description:"welcome to the first item and enjoy ",row:1,col:1},
          {titile:"demo",subtitle:"first item",description:"welcome to the first item and enjoy ",row:1,col:1},
          {titile:"demo",subtitle:"first item",description:"welcome to the first item and enjoy ",row:1,col:1},
          {titile:"demo",subtitle:"first item",description:"welcome to the first item and enjoy ",row:1,col:1},
          {titile:"demo",subtitle:"first item",description:"welcome to the first item and enjoy ",row:1,col:1}]
 */

  constructor(public dialogref:MatDialogRef<AddProjectDialogComponent>, private fb:FormBuilder,private dataset:WebRequestsService) { }
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
      this.dataset.adddataset({"title":this.dname.value.Dataset_name,"Instruction":this.dname.value.instruction,"type":this.dname.value.select_type,"objects":this.objects}).subscribe((res)=>{
        console.log(res);
        this.dialogref.close();
      })
    }
  }
  ngOnInit(): void {
  }

}
