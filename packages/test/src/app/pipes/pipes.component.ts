import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  pipes = [
    {
      title: 'Generic',
      path: 'generic'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
