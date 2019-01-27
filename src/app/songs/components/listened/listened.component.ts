import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from 'src/app/store';
import { map } from 'rxjs/operators';
import { SongsService, Song } from '../../services/songs.service';

@Component({
  selector: 'app-listened',
  templateUrl: './listened.component.html',
  styleUrls: ['./listened.component.scss']
})
export class ListenedComponent implements OnInit {
  playlist$: Observable<any>;

  constructor(private store: Store, private songsService: SongsService) {}

  ngOnInit() {
    this.playlist$ = this.store.select('playlist').pipe(
      map((playlist: object[]) => {
        return playlist.filter(song => song['listened']);
      })
    );
  }

  onToggle(song: Song): void {
    this.songsService.updateSong(song);
  }
}
