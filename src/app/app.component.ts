import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  myPost = {
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
    'Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo ' +
    'reprehenderit optio amet ab temporibus asperiores quasi cupiditate. ' +
    'Voluptatum ducimus voluptates voluptas?'
  };
  myDate = new Date(1483225200000);
}
