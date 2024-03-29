import { CommonModule, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FieldComponent } from '../field/field.component';

@Component({
  selector: 'app-record',
  standalone: true,
  imports: [CommonModule, NgFor, FieldComponent],
  templateUrl: './record.component.html',
  styleUrl: './record.component.css'
})
export class RecordComponent {
  @Input() record: Object = {};

  getValues() {
    return Object.values(this.record);
  }
}
