import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-panel',
  templateUrl: './button-panel.component.html',
  styleUrls: ['./button-panel.component.scss']
})
export class ButtonPanelComponent implements OnInit {
  @Input() size: {count: number, rowCount: number};
  btnCollection: Array<any>;

  constructor() { }

  ngOnInit() {
    this.initBtnCollection();
    console.log('size', this.size);
  }

  initBtnCollection(): void {
    this.btnCollection = new Array();
    const buttons = new Array(this.size.count).fill(null).map((x, y) => ({ id: { x: null, y: null }, status: 'OFF' }));
    let rowButtons = new Array();
    let xCtr = 0;
    let yCtr = 0;
    // populate button collection
    buttons.forEach((button, index) => {
      button.id.x = xCtr;
      button.id.y = yCtr;
      rowButtons.push(button);
      yCtr++;
      if ((index + 1) % this.size.rowCount === 0) {
        this.btnCollection.push(rowButtons);
        rowButtons = new Array(); // reset array
        xCtr++;
        yCtr = 0; // reset y counter
      }
    });
  }

  toggleStatus(xindex, yindex, event): void {
    const status = { OFF: 'ON', ON: 'OFF' }[event.textContent];
    const btn = this.findBtn(xindex, yindex);
    event.textContent = status;
    btn.status = status;
  }

  toggleReset(): void {
    this.initBtnCollection();
  }

  updateBtn(b): void {
    // compute index via coordinates
    const xindex = this.size.rowCount - b.id.x;
    const yindex = b.id.y - 1;
    const btn = this.findBtn(xindex, yindex);
    btn.status = b.status;
  }

  private findBtn(xindex: number, yindex: number) {
    return this.btnCollection[xindex].filter(btn => btn.id.x === xindex && btn.id.y === yindex)[0];
  }
}
