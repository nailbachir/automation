import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-submition',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './submition.component.html',
  styleUrl: './submition.component.css'
})
export class SubmitionComponent {
  hiddenValue = true
  showDetails(){
    this.hiddenValue = !this.hiddenValue
  }
  downloadPDF() {
    const link = document.createElement('a');
    link.href = '/template.docx'; // Path to your PDF file
    link.download = 'template.docx'; // Name for the downloaded file
    link.click();
  } 
}
