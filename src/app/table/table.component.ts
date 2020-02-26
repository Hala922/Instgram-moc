import { Component, OnInit } from '@angular/core';
import { PACKAGES } from '../mockData/packages';
import { Package } from '../interfaces/packages';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  packages: Package[] = PACKAGES;
  constructor() { }

  ngOnInit() {
  }

}
