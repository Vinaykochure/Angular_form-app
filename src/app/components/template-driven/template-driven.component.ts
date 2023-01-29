import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharingService } from 'src/app/services/sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  allFormData: any = []

  form = {
    fullName: '',
    describe: ''
  }

  constructor(
    private sharingService: SharingService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {

  }

  onSubmit(data: any): void {
    this.allFormData.push(data);
    this.sharingService.setFormData(this.allFormData);
    this.router.navigate(['/receiver']);
  }

}
