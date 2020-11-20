import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {
  title = 'my-app';

  columnDefs = [
      {
        field:"",
        checkboxSelection: true
      },
      { field: 'make' },
      { field: 'model' },
      { field: 'price'}
  ];

  rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
