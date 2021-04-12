import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { WebRequestsService } from '../../services/web-requests.service'


// the interface structure
export interface img {
  uri:string,
  annotation:object,
  areaannotation:String
}

@Component({
  selector: 'app-scaled-img',
  templateUrl: './scaled-img.component.html',
  styleUrls: ['./scaled-img.component.css']
})
export class ScaledImgComponent implements OnInit {

  // Default variable that may need to be used...
  parm;
  images=[];
  images_names:any
  images_url:img[]=[]
  pname:string;
  slideIndex = 1;
  annotations=[
    {
      "left":"200px",
      "top":"500px",
      "width":"120px",
      "height":"120px"
    },
    {
      "left":"150px",
      "top":"20px",
      "width":"120px",
      "height":"120px"
    },
    {
      "left":"500px",
      "top":"120px",
      "width":"120px",
      "height":"120px"
    }
  ]

  // get images function 
  getimagename(prname:string){
    console.log("The value of pname is :- ",prname)
    this.client.listscaledimages(prname).subscribe(
      (res)=>{
        if(!res)
        {
          console.log("Empty image set...");
        }
        this.images_names=res;
        this.images_url=[];
        Object.values(res).forEach((value)=>{
            this.images_url.push({uri:`http://localhost:3000/api/getdata/${value.filename}`,annotation:value.anotations,areaannotation:JSON.stringify(value.anotations,null," ")})
        })
        console.log(res)
      }
    )
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private client:WebRequestsService
  ) { }

  ngOnInit(): void {
    /* To get the parameter form the url */
    this.parm=this.route.paramMap.pipe(
      switchMap((params:ParamMap)=> params.get('title'))
    )
    console.log(this.parm.source.source._value.title);
    this.pname=this.parm.source.source._value.title;
    this.getimagename(this.pname);
    /* above mention works done */


    // the scaled image  fuciton
    this.showSlides(this.slideIndex);


  }

  // the javascript for the popup and model
  openModal() {
    document.getElementById("myModal").setAttribute("style","display:block");
  }

  closeModal() {
    document.getElementById("myModal").setAttribute("style","display:none")
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }
  
  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        // slides[i].style.display = "none";
        slides[i].setAttribute("style","display:none")
    }
    // slides[this.slideIndex-1].style.display = "block";
    slides[this.slideIndex-1].setAttribute("style","display:block")
    // captionText.innerHTML = dots[this.slideIndex-1].alt;
  }


}
