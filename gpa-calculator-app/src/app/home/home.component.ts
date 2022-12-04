  // Title: GPA Calculator App
  // Author: Professor Krasso
  // Date: 3 Dec 2022
  // Modified By: Kayla McDanel
  // Description: GPA Calculator App - Final Version
  // Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];

  transcriptEntries: Array<ITranscript> = [];

  gpaTotal: number = 0;

  transcriptForm!: FormGroup;

  constructor(private fb: FormBuilder) {


   }
//replacing template driven form with reactive form
  ngOnInit(): void {
    this.transcriptForm = this.fb.group({course:['', Validators.required], grade:['', Validators.required]});
  }

//function that returns transcript form controls
get form() {
  return this.transcriptForm.controls;
}

  //saves entry
  onSubmit(event: { currentTarget: { reset: () => void; }; }) {
    this.transcriptEntries.push({
      course: this.form['course'].value,
      grade: this.form['grade'].value
    });
    event.currentTarget.reset()

  }

  //calculates gpa
  calculateResults() {
    let gpa: number = 0;

    for (let entry of this.transcriptEntries) {
      switch (entry.grade) {
          case 'A':
          gpa += 4.0;
          break;
        case 'A-':
          gpa += 3.7;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa += 3.00;
          break;
        case 'B-':
          gpa += 2.70;
          break;
        case 'C+':
          gpa += 2.30;
          break;
        case 'C':
          gpa += 2.00;
          break;
        case 'C-':
          gpa += 1.70;
          break;
        case 'D+':
          gpa += 1.30;
          break;
        case 'D':
          gpa += 1.00;
          break;
        case 'D-':
          gpa += .70;
          break;
        default:
          gpa += 0.00;
          break;
        }
    }

    console.log(gpa);
    this.gpaTotal = gpa / this.transcriptEntries.length;
    console.log(this.gpaTotal);
  }

  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;

  }

}
