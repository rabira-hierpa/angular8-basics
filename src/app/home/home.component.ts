import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  clickCounter: number = 0;
  name: string = '';
  holder: string = 'two-way data binding';

  constructor() {}

  ngOnInit(): void {}

  countClick() {
    this.clickCounter += 1;
  }

  resetClick() {
    this.clickCounter = 0;
  }

  setClasses() {
    let myClasses = {
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4,
    };
    return myClasses;
  }
}
