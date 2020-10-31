import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mat-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() id: string;
  @Output() selectChangeEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  checked(event: Event) {
    const eventCheckbox = event.target as HTMLInputElement;
    // const eventCheckbox = <HTMLInputElement>event.target;
    this.selectChangeEvent.emit(eventCheckbox.checked);
  }
}
