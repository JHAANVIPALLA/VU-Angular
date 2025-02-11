import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css',
  standalone: true
})
export class IntroComponent {
  constructor(private router: Router) {}

  navigateToVisit() {
    this.router.navigate(['/visit']);  // Navigate to 'visit' route
  }

  // navigateToVisit() {
  //   window.location.href = 'https://www.google.com';  // Replace with the URL you want
  // }
  
  // Example of dynamically assigning the image path in a component:
  // imagePath = 'assets/images/VU_Logo.jpg';


}
