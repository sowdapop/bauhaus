  // Title: Exercise 7.2 - Reactive Forms
  // Author: Professor Krasso
  // Date: 3 Dec 2022
  // Modified By: Kayla McDanel
  // Description: GPA Calculator App
  // Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  //populates student ids array with numbers
  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
   }

   //look for a matching value from the array above using the built-in some function
   validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
   }
}
