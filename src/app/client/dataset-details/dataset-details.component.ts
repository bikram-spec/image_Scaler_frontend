import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { WebRequestsService } from '../../services/web-requests.service'

/* import for the file upload */
import {ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
/* import for the file upload ends */

export interface img {
  uri:string,
  Status:string,
  Tags?:string[]
}

@Component({
  selector: 'app-dataset-details',
  templateUrl: './dataset-details.component.html',
  styleUrls: ['./dataset-details.component.css']
})
export class DatasetDetailsComponent implements OnInit {

  parm;
  images=[];
  images_names:any;
  scaled_data:any;
  images_url:img[]=[]
  pname:string;
  /* The form for the file upload code with templere driven form .. */
  @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Choose File';


  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: File) => {
        this.fileAttr += file.name + ' - ';
        console.log(file);
        this.images.push(file);
      });

      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          let imgBase64Path = e.target.result;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);
      
      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = "";
    } else {
      this.fileAttr = 'Choose File';
    }
  }

  onSubmit(form:NgForm){
    console.log("the values of the form is :- ",form);
    console.log(form.value);

    const formdata=new FormData();
    this.images.forEach(file=>{
      formdata.append('files',file);
    })
    console.log(this.images);
    this.pname=this.parm.source.source._value.title;
    this.client.addimages(this.pname,formdata).subscribe((res)=>{
      //console.log(JSON.stringify(res));
      console.log(res);
      this.images=[];
      this.getimagename(this.pname);
    })
  }

  getimagename(prname:string){
    console.log("The value of pname is :- ",prname)
    this.client.listimages(prname).subscribe(
      (res)=>{
        if(!res)
        {
          console.log("Empty image set...");
        }
        this.images_names=res;
        this.images_url=[];
        Object.values(res).forEach((value)=>{
          if(value.cannotation.length!=0)
          {
            this.images_url.push({uri:`http://localhost:3000/api/getdata/${value.filename}`,Status:value.Status,Tags:value.cannotation})
          }
          else
          {
            this.images_url.push({uri:`http://localhost:3000/api/getdata/${value.filename}`,Status:value.Status})            
          }
        })
        console.log(res)
      }
    )
  }

  // getting scaled data
  getscaleddata(prname:string){
    console.log("The value of pname is :- ",prname)
    this.client.listscaledimages(prname).subscribe(
      (res)=>{
        if(!res)
        {
          console.log("Empty image set...");
        }
        this.scaled_data=res;
        console.log(res)
      }
    )
  }

  /* export data event handler */
  export_data() {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.scaled_data,null," "));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download","scale.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }
  
  /* The form for the file upload code templere driven code  ennds.. */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private client:WebRequestsService
  ) {}

  ngOnInit()
  {
    /* To get the parameter form the url */
    this.parm=this.route.paramMap.pipe(
      switchMap((params:ParamMap)=> params.get('title'))
    )
    console.log(this.parm.source.source._value.title);
    this.pname=this.parm.source.source._value.title;
    this.getimagename(this.pname);
    this.getscaleddata(this.pname);
    /* above mention works done */


  };



};
