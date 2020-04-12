import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reverse',
  templateUrl: './reverse.component.html',
  styleUrls: ['./reverse.component.scss']
})
export class ReverseComponent implements OnInit {

  str = 'test app is running!';
  num = -12345.67890;
  arr = ['a', 'b', 'c', 'd', 'e'];

  constructor() { }

  ngOnInit(): void {
  }

}
