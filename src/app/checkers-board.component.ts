import { Component } from '@angular/core';
import { CheckersRowComponent } from './checkers-row.component';


@Component({
  selector: 'app-checkers-board',
  standalone: true,
  imports: [CheckersRowComponent],
  templateUrl: './checkers-board.component.html',
  styleUrls: ['./checkers-board.component.css']
})
export class CheckersBoardComponent {
  rows: { isDark: boolean }[][];

  constructor() {
    this.rows = [];
    for (let i = 0; i < 8; i++) {
      const row: { isDark: boolean }[] = [];
      for (let j = 0; j < 8; j++) {
        row.push({ isDark: (i + j) % 2 === 0 });
      }
      this.rows.push(row);
    }
    console.log('rows',this.rows);
  }
}
