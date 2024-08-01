import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Song } from '../song.interface';
import { SongService } from '../song.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
})
export class SongComponent {
  @Input() song!: Song;
  @Output() deleteSongEvent = new EventEmitter<number>();
  @Output() voteChanged = new EventEmitter<void>();
  @Output() modifySong = new EventEmitter<Song>();

  constructor(private songService: SongService) {}

  vote() {
    this.song.votes++;
    this.songService.updateSong(this.song).subscribe(() => {
      this.voteChanged.emit();
    });
  }

  deleteSong() {
    this.songService.deleteSong(this.song.id).subscribe(() => {
      this.deleteSongEvent.emit(this.song.id);
    });
  }

  modify() {
    this.modifySong.emit(this.song);
  }
}
