import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <h1 class="text-3xl mb-5">{{ title }} {{ withShadow ? withShadow : '' }}</h1>
  `,
})
export class TitleComponent implements OnInit {

  @Input({ required: true })
  public title!: string

  @Input({ transform: booleanAttribute })
  public withShadow: boolean = false

  ngOnInit(): void {
    if(!this.title) {
      throw new Error('title is required')
    }
  }

}
