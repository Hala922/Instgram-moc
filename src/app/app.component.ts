import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string = 'My Instagram';

  // Pass this property to the app-table component
  // and show it in an h2
 // PostTable : string = 'Users Post';

  

}
