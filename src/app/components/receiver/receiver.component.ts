import { Component, OnInit } from '@angular/core';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {

  allFormData: any = [];

  constructor(
    private sharingService: SharingService
  ) { }

  ngOnInit(): void {
    this.allFormData = this.sharingService.getFormData()
    console.log(this.allFormData)
  }
}
