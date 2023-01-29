import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  allTypeFormData: any = []
  public formData = new BehaviorSubject<any>([])

  constructor() { }
  setFormData(data: any) {
    this.allTypeFormData = data;
    this.formData.next(this.allTypeFormData);
    console.log(this.allTypeFormData)
  }

  getFormData() {
    return this.allTypeFormData;
  }
}