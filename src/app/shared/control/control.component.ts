import { Component , input, ViewEncapsulation ,inject, ElementRef} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
     '(click)' : 'onClick()' //-> how can we listen to an event
  }
})
export class ControlComponent {
//  @HostBinding('class') className = 'control'; -> another way of using host binding
// @HostListener('click) onClick(){console.log('Clicked!')}

  label = input.required<string>();
  private el = inject(ElementRef);
 onClick(){
  console.log('Clicked!');
  console.log(this.el);
 }
}
