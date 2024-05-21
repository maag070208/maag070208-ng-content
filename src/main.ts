import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { LoginComponent } from './app/pages/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent],
  template: `
    <app-login />
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
