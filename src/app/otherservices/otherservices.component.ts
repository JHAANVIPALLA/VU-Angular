import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-otherservices',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './otherservices.component.html',
  styleUrl: './otherservices.component.css'
})
export class OtherservicesComponent implements OnInit {
  services: any[] = []; // Holds the API response (array of services)

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Fetch services data from DummyJSON API
    this.http.get<any>('https://dummyjson.com/products').subscribe(response => {
      this.services = response.products; // Access the 'products' array
      console.log(this.services); // Log API response for debugging
    });
  }
}
