import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit () {
    firebase.initializeApp({
      apiKey: "AIzaSyAtGe1eFA5KBwKeg4f5YgP1h1iDzw72V_Y",
      authDomain: "ng-recipe-book-159d8.firebaseapp.com"
    })
  }

}
