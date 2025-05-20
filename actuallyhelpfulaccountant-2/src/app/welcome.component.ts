import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IndexedDBService } from 'my-library';


@Component({
  selector: 'app-welcome',
  template: `
    <div style="padding: auto;">
      <h1>You are logged in!</h1>
      <button (click)="updateSession()">Procceed</button>
</div>
  `,
  styles: [`
    h1 {
      margin-bottom: 20px;
    }
  `],
  standalone: false
})
export class WelcomeComponent {
  constructor(private userService: IndexedDBService,private router: Router) {}

  async updateSession() {
    try {
      const dataOut = await this.userService.updateSession({ Restrict: '' });
      this.router.navigate(['/home']); // Redirect to '/tab1'
    } catch (error) {
      console.error('Error updating session:', error);
    }
  }
}