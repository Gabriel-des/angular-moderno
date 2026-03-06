import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {

  private snackBar = inject(MatSnackBar);

  success(message: string, buttonText: string = 'Ok') {
    this.snackBar.open(message, buttonText, {
      panelClass: 'snack-bar-success-feedback'
    })
  }
  
}
