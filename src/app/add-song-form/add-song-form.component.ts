// add-song-form.component.ts
import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Song } from '../song.interface';
import { SongService } from '../song.service';

@Component({
  selector: 'app-add-song-form',
  templateUrl: './add-song-form.component.html',
  styleUrls: ['./add-song-form.component.scss'],
})
export class AddSongFormComponent {
  @Input() songToEdit: Song | null = null;
  @Output() songAdded = new EventEmitter<Song>();
  @Output() songUpdated = new EventEmitter<Song>();

  newSong: Song = {
    id: 0,
    artist: '',
    name: '',
    album: '',
    date: '',
    votes: 0,
  };

  constructor(private songService: SongService) {}

  ngOnChanges() {
    if (this.songToEdit) {
      this.newSong = { ...this.songToEdit };
    }
  }

  addOrUpdateSong() {
    this.newSong.date = new Date().toISOString();
    if (this.songToEdit) {
      this.songService
        .updateSong(this.newSong)
        .subscribe((updatedSong: Song) => {
          this.songUpdated.emit(updatedSong);
        });
    } else {
      this.songService.getSongs().subscribe((songs: Song[]) => {
        const maxId =
          songs.length > 0 ? Math.max(...songs.map((song) => song.id)) : 0;
        this.newSong.id = maxId + 1;
        this.songService.addSong(this.newSong).subscribe((addedSong: Song) => {
          this.songAdded.emit(addedSong);
        });
      });
    }
  }
}
