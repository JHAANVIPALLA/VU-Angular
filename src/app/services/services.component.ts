import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for API calls
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  imports: [CommonModule, HttpClientModule, RouterModule] // Add CommonModule and HttpClientModule here
})
export class ServicesComponent implements OnInit {
  
  services: any[] = []; // Array to store fetched services data

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Make the HTTP GET request to fetch services from the API
    this.http.get<any[]>('http://localhost:3000/services')
      .subscribe(
        (data) => {
          this.services = data; // Assign the fetched data to the services array
        },
        (error) => {
          console.error('Error fetching services:', error); // Handle any errors
        }
      );
  }
}

// alternate method for routerlink

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-services',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   templateUrl: './services.component.html',
//   styleUrl: './services.component.css'
// })
// export class ServicesComponent {
//   services: any[] = []; // Holds the API response

//   constructor(private http: HttpClient, private router: Router) {}

//   ngOnInit() {
//     // Fetch services data from the local JSON server or API
//     this.http.get<any>('http://localhost:3000/services').subscribe(response => {
//       this.services = response;
//       console.log(this.services); // Log services data for debugging
//     });
//   }

//   navigateToOtherServices() {
//     this.router.navigate(['/otherservices']);
//   }
// }
