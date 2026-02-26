import { Component, Inject, Input } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-bottomcommities',
  standalone: true,
  imports: [NgFor],
  templateUrl: './bottomcommities.component.html',
  styleUrl: './bottomcommities.component.css'
})
export class BottomcommitiesComponent {
  names :any
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {
    this.names = data
  }  
  
}
