import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckersBoardComponent } from './checkers-board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CheckersBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularCheckers';
}
