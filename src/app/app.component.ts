import { Component, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import { ButtonPanelComponent } from './button-panel/button-panel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Practical Exam';
  count = 16;
  rowCount = Math.sqrt(this.count);
  @Output() emitter: EventEmitter<boolean> = new EventEmitter();
  @ViewChild(ButtonPanelComponent, { static: false }) buttonPanel: ButtonPanelComponent;

  triggerReset() {
    this.buttonPanel.toggleReset();
  }

  handdleFromManual($event) {
    console.log($event);
    this.buttonPanel.updateBtn($event);
  }
}
