
//import { Component } from '@angular/core';
import { Router } from '@angular/router';

//@Component({
  //selector: 'app-dashboard',
  //standalone: true,
  //templateUrl: './dashboard.component.html',
  //styleUrls: ['./dashboard.component.css']
//})
//export class DashboardComponent {

  //constructor(private router: Router) {}

  //navigateToBenchmarking(): void {
    //this.router.navigate(['/benchmarking']);
  //}
//}
import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { SearchService } from '../services/search.service'; // Import the service

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [FormsModule] 
})
export class DashboardComponent {

  query: string = ''; // Bind to the search input
  summary: string = ''; // To store the search result

  constructor(private router: Router, private searchService: SearchService) {}

  // Navigation to benchmarking page
  navigateToBenchmarking(): void {
    this.router.navigate(['/benchmarking']);
  }

  // Method to call the backend and update the UI
  onSearch(): void {
    if (this.query.trim()) {
      this.searchService.search(this.query).subscribe(
        data => {
          // Assuming the backend response is a list of posts
          this.summary = data.map((item: any) => item.title).join(', '); // Just for demo, adjust as needed
        },
        error => {
          console.error('Error occurred while fetching data:', error);
        }
      );
    }
  }
}
