import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  n = Math.random();
  n2 = 2 * Math.random();
  n3 = 3 * Math.random();
  n4 = 4 * Math.random();
  n5 = 5 * Math.random();
  n6 = 6 * Math.random();
  n7 = 7 * Math.random();
  n8 = 8 * Math.random();
  

  constructor() { }

  ngOnInit() {
  }

}