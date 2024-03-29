import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { RecordComponent } from './record/record.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RecordComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-angular-displaying-data';
  dataService: DataService;
  data?: any;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  buttonPush() {
    this.data = this.dataService.data;
  }

}
