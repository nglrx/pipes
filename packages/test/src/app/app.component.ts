import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test app is running!';
  num = -12345.67890;
  arr = ['a', 'b', 'c', 'd', 'ee'];
  nul = null;
  emptyArr = [];
  obj = {a: 'b'};
  date = new Date();
}
