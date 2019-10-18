import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-manual-override',
  templateUrl: './manual-override.component.html',
  styleUrls: ['./manual-override.component.scss']
})
export class ManualOverrideComponent implements OnInit {
  @Output() manualEvent = new EventEmitter<{ id: { x: number, y: number }, status: string }>();
  btnForm: FormGroup;
  checked = false;

  constructor() { }

  ngOnInit() {
    this.btnForm = new FormGroup({
      x: new FormControl(),
      y: new FormControl()
    });
  }

  updateBtn() {
    console.log('from manual', this.btnForm.value);
    const btn = {
      id: this.btnForm.value,
      status: this.checked ? 'ON' : 'OFF'
    };
    this.manualEvent.emit(btn);
  }

}
