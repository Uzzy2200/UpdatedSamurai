import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GenericService } from '../services/generic.service';
import { FormsModule, FormGroup, Validators } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';



  constructor(private router: Router, private GenerirService: GenericService<LoginComponent>) { }

  login(): void {
    if (!this.email.trim()) {
      this.errorMessage = 'Email is required';
      return;
    }
    if (!this.password.trim()) {
      this.errorMessage = 'Password is required';
      return;
    }

    // Hash the password before sending it to the server
    const hashedPassword = this.GenerirService.hashPassword(this.password);

    // Here you can send the email and hashedPassword to your server for authentication
    // For now, let's just log them
    console.log('Email:', this.email);
    console.log('Hashed Password:', hashedPassword);

    // After successful authentication, navigate to another page
    this.router.navigate(['/admin-page']);
  }
}
