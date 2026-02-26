import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [ CommonModule , MatCardModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush , 
  encapsulation:ViewEncapsulation.None
})
export class CarouselComponent implements OnInit, OnDestroy {
  items = [
    { title: 'Slide 1', image: 'path-to-image-1.jpg', content: 'Content for slide 1' },
    { title: 'Slide 2', image: 'path-to-image-2.jpg', content: 'Content for slide 2' },
    // Add more slides as needed
  ];
  images = [
    'Track 1: Study of Renewable Energy Systems based on Wind Power, Hydropower, Solar Energy,Biomass Energy, Wave Energy . ',
    'Track 2: Advanced Maintenance and Diagnosis of Renewable Energy Systems.',
    'Track 3: Intelligent Control and Optimization of Renewable Energy Systems (Machine LearningStudies) and Advanced Control.',
    'Track 4: Special Applications of Renewable Energy Systems: Heating Systems, Cooling Systems,Agriculture Fields, Water Desalination, Food Security and Health Security.',
    'Track 5: SMART and MICRO Grids Integrating Renewable Energy Sources.',
    'Track 6: Electric Vehicles Drive based on Renewable Energy / Hybrid Electric Vehicles.',
    'Track 7: Energy Storage and Conversion.',
    'Track 8: Green Hydrogen and all Hydrogen Energy Techniques (Production, Storage and Transport) ,Fuel Cells.',
    'Track 9: Clean Energy Innovations (Startup Projects).',
    'Track 10: Environmental Impact of Renewable Energy.'

  ];
  currentIndex = 0;
  intervalId: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.cdr.markForCheck();
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.cdr.markForCheck();
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 3000); // Change image every 3 seconds
  }
}
