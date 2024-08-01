import { Component } from '@angular/core';
import { Song } from './song.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  songs!: Song[]

  
}
