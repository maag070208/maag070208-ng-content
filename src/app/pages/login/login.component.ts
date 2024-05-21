import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { LoginFormComponent } from '../../components/login/login-form/login-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardComponent, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
