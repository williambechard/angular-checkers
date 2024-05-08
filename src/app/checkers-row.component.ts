import { Component, Input } from '@angular/core';
import { CheckersTileComponent } from './checkers-tile.component';


@Component({
  selector: 'app-checkers-row',
  standalone: true,
  imports: [CheckersTileComponent],
  templateUrl: './checkers-row.component.html',
  styleUrls: ['./checkers-row.component.css']
})
export class CheckersRowComponent {
  @Input() tiles: { isDark: boolean }[];

  constructor() {
    this.tiles = [];
  }
}
