import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MonitorInterceptor } from '../monitor.interceptor';
import { HttpClient } from '@angular/common/http';
import { DatashareService } from '../service/datashare.service';
import { Custom } from '../helper/urlparameter';
@Component({
  selector: 'app-urltester',
  templateUrl: './urltester.component.html',
  styleUrls: ['./urltester.component.css']
})
export class UrltesterComponent implements OnInit {
  postId:any;
  elapsedTime:any
 
  logs: Array<{url: string, time: any}> = []; 
  profileForm = new FormGroup({
    url: new FormControl(''),
    time: new FormControl(''),
  });
  constructor(private http: HttpClient, public datashareservice:DatashareService) { }

  ngOnInit(): void {
    this.datashareservice.SharingData.subscribe((res: any) => {  
      this.elapsedTime = res;  
      console.log(this.elapsedTime)
      this.checkingTheURLtime()
     
  });
   
  }
testURL() {
  if(this.profileForm.value.url && this.profileForm.value.time ){
    this.http.post<any>(this.profileForm.value.url, {  }).subscribe(
      data => {
        this.postId = data.id;
        console.log(this.postId)
    },
    
    
    )
  } else {
    alert("Please input URL and time")
  }
  
}
checkingTheURLtime() {
  let customObj = new Custom();
  if(this.elapsedTime > this.profileForm.value.time) {
    customObj.url = this.profileForm.value.url;
   customObj.time = this.elapsedTime ; 
   this.logs.push(customObj);
  } else {
    alert("This URL has loaded in the given time")
  }
 

}
removelogitem(i:any)  {
  this.logs.splice(i, 1);
}
}
