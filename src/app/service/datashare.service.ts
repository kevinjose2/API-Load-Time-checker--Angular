import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  SharingData = new Subject();  
  constructor() { }
}
