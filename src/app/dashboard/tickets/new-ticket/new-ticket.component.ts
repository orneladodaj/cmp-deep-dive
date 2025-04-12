import { AfterViewInit, Component, ElementRef, viewChild, ViewChild , OnInit, Output, EventEmitter, output} from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent,ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit{
 // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
 // @ViewChildren(ButtonComponent) buttons
  //@Output() add = new EventEmitter<{title: string; text: string;}>();
  eneteredTitle = '';
  enteredText = '';
  add = output<{title: string; text: string;}>();



 private form = viewChild<ElementRef<HTMLFormElement>>('form');
/* ngOnInit(){
  console.log('ON INIT');
  console.log(this.form()?.nativeElement);
 }*/
 ngAfterViewInit(){
   console.log('AFTER VIEW INIT');
   console.log(this.form()?.nativeElement);
 }
onSubmit(){
 this.add.emit({title: this.eneteredTitle, text: this.enteredText});
 // this.form()?.nativeElement.reset();
 this.eneteredTitle = '';
 this.enteredText = '';
}
}
