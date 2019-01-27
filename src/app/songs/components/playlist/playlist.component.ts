import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from 'src/app/store';
import { SongsService, Song } from '../../services/songs.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  playlist$: Observable<any>;

  constructor(private store: Store, private songsService: SongsService) {}

  ngOnInit() {
    this.playlist$ = this.store.select('playlist');
    this.songsService.getPlaylist$.subscribe();
  }

  onToggle(song: Song): void {
    this.songsService.updateSong(song);
  }
}
