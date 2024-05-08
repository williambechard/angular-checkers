import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkers-tile',
  standalone: true,
  templateUrl: './checkers-tile.component.html',
  styleUrls: ['./checkers-tile.component.css']
})
export class CheckersTileComponent {
  @Input() isDark: boolean;

  constructor() {
    this.isDark = false;
  }
}
