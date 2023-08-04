import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @Output() onProjects: EventEmitter<any> = new EventEmitter<any>();
  @Output() onAbout: EventEmitter<any> = new EventEmitter<any>();
  onGoToProjects() {
    this.onProjects.emit('');
  }
  onGoToAbout() {
    this.onAbout.emit('');
  }
}
