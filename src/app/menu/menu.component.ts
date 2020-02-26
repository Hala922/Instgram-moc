import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  show: boolean = false;

  open() {
    this.show = true;
  }

  close() {
    this.show = false;
  }

  ngOnInit() {
  }

}
