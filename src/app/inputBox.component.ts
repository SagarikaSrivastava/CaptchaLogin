import { Component, Input } from '@angular/core';

@Component({
  selector: 'inputBox',
  template: `<div>
  <label>{{inputTag}}</label><br/>
  <input/>
</div>`,
  styles: [
    "label {font-family: 'Times New Roman'; margin-right:10px; font-size: 12px; color: rgb(90, 101, 255)} input{border-radius: 5%; background-color: rgb(240, 235, 255); }",
  ],
})
export class InputBoxComponent {
  @Input() inputTag: string;
}
