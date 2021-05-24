import { Component } from '@angular/core';
import { MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular100day';

  personal_infor ={
    name: 'Minh',
    title: 'Information engineer',
    company:' FTL corp'
  };


  handler() {
    console.log('clicked');
  };
}
