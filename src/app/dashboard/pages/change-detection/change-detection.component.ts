import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './change-detection.component.html',
})
export default class ChangeDetectionComponent { }
