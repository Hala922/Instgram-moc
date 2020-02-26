import { Component, OnInit } from '@angular/core';
import { SERVICES } from '../mockData/services';
import { Service } from '../interfaces/services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit {
  // services will now be available in services.component.html
  services: Service[] = SERVICES;

  // the constructor always runs when the class is instaniated!
  constructor() {
    // In order to access the services property
    // you need to self-reference the class and dot
    // notation to the property
    // self-references can be done with `this`
    console.log(this.services);
  }

  // ngOnInit is the "Angular constructor"
  ngOnInit() {
    console.log(this.services);
  }

}
