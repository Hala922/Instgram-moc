import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor() { }

  // This variable is available in the component's HTML file
  showHelpModal: boolean = false;

  // This function is available in the component's HTML file
  openModal() {
    this.showHelpModal = true;
  }

  // This function is available in the component's HTML file
  closeModal() {
    this.showHelpModal = false;
  }

  ngOnInit() {
  }

}
