import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  @ViewChild('main', { static: true }) main: ElementRef;
  constructor() {
    this.main = {} as ElementRef;
  }

  ngOnInit(): void {
    console.log(this.main);
  }
  ngAfterViewInit() {
    console.log(this.main);
  }
  scrollToProjects() {
    console.log('scrollToProjects');

    this.main.nativeElement.querySelector('#projects').scrollIntoView({
      behavior: 'smooth',
    });
  }
  scrollToAbout() {
    console.log('scrollToAbout');
    this.main.nativeElement.querySelector('#about').scrollIntoView({
      behavior: 'smooth',
    });
  }
}
