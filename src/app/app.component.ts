import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {VelopietosoService} from './services/velopietoso.service';
import * as repl from 'repl';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private velopietosoService: VelopietosoService = inject(VelopietosoService);
  title = 'velopietoso-counter';
  velopietosoCounter: number = 0;
  rowId: string = '';

  ngOnInit() {
    this.velopietosoService.getCounter().subscribe((response) => {
      this.velopietosoCounter = response.counter;
      this.rowId = response.id;
    });
  }

  increaseCounter() {
    console.log('AHO');
    this.velopietosoCounter++;
    this.velopietosoService.setCounter(this.rowId, this.velopietosoCounter);
  }
}
