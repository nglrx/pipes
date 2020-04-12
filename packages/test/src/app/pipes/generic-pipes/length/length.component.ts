import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styleUrls: ['./length.component.scss']
})
export class LengthComponent implements OnInit {

  str = 'test app is running!';
  num = -12345.67890;
  arr = ['a', 'b', 'c', 'd', 'e'];

  constructor() { }

  ngOnInit(): void {
  }

}
