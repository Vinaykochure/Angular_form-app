import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  allFormData: any = [];

  constructor(
    private sharingService: SharingService,
    private router: Router,
  ) { }

  reactiveForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
    describe: new FormControl('', [Validators.required, Validators.minLength(30)])
  })

  getControl(name: any): AbstractControl | null {
    return this.reactiveForm.get(name)
  }

  ngOnInit(): void {

  }

  onSubmit(data: any) {
    this.allFormData.push(data);
    this.sharingService.setFormData(this.allFormData);
    this.router.navigate(['/receiver']);
  }
}
