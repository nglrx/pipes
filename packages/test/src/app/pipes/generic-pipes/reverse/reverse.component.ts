import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reverse',
  templateUrl: './reverse.component.html',
  styleUrls: ['./reverse.component.scss']
})
export class ReverseComponent implements OnInit {

  title = 'test app is running!';
  num = -12345.67890;
  arr = ['a', 'b', 'c', 'd', 'ee'];
  nul = null;
  emptyArr = [];
  obj = {a: 'b'};
  date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
