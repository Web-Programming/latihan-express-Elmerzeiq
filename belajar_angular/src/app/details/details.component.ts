import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <p>
      details works for housingLocationId: {{ housingLocationId }}
    </p>

    <section>
      <h1 class="section-heading">Apply to Live Here</h1>
      <form [formGroup]="applyForm" (ngSubmit)="submitApplyForm()" novalidate>
        <div>
          <label for="first-name">First Name</label>
          <input type="text" id="first-name" formControlName="firstName" placeholder="Input First Name">
          <div *ngIf="applyForm.get('firstName')?.invalid && applyForm.get('firstName')?.touched" class="error">
            First Name is required.
          </div>
        </div>

        <div>
          <label for="last-name">Last Name</label>
          <input type="text" id="last-name" formControlName="lastName" placeholder="Input Last Name">
          <div *ngIf="applyForm.get('lastName')?.invalid && applyForm.get('lastName')?.touched" class="error">
            Last Name is required.
          </div>
        </div>

        <button type="submit" [disabled]="applyForm.invalid">Apply</button>
      </form>
    </section>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  housingLocationId: number = 0;
  housingLocation: HousingLocation | undefined;

  // Form with basic validation (required fields)
  applyForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required])
  });

  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId);
    console.table(this.housingLocation);
  }

  submitApplyForm() {
    if (this.applyForm.valid) {
      alert('First Name: ' + this.applyForm.value.firstName + ', Last Name: ' + this.applyForm.value.lastName);
    } else {
      alert('Please fill out the form correctly');
    }
  }
}