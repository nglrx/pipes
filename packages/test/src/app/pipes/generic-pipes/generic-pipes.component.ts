import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-pipes',
  templateUrl: './generic-pipes.component.html',
  styleUrls: ['./generic-pipes.component.scss']
})
export class GenericPipesComponent implements OnInit {

  genericPipes = [
    {
      title: 'Length',
      path: 'length'
    },
    {
      title: 'Reverse',
      path: 'reverse'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
