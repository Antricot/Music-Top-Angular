import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Song } from '../song.interface';
import { SongService } from '../song.service';

@Component({
  selector: 'app-song-top',
  templateUrl: './song-top.component.html',
  styleUrls: ['./song-top.component.scss'],
})
export class SongTopComponent implements OnInit {
  songs: Song[] = [];
  songToEdit: Song | null = null;

  constructor(private songService: SongService) {}

  ngOnInit() {
    this.loadSongs();
  }

  loadSongs() {
    this.songService.getSongs().subscribe((songs) => {
      this.songs = songs;
    });
  }

  onSongAdded(song: Song) {
    this.songs.push(song);
  }

  onSongUpdated(updatedSong: Song) {
    const index = this.songs.findIndex((song) => song.id === updatedSong.id);
    if (index !== -1) {
      this.songs[index] = updatedSong;
    }
  }

  onDeleteSong(id: number) {
    this.songs = this.songs.filter((song) => song.id !== id);
  }

  onVote() {
    this.loadSongs();
  }

  onModifySong(song: Song) {
    this.songToEdit = song;
  }
}
