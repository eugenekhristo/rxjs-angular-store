import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Song, ToggleSongProps } from '../../services/songs.service';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SongsListComponent {
  @Input() list: Song[] = [];
  @Output() toggle = new EventEmitter<Song>();

  toggleSong(i: number, prop: ToggleSongProps): void {
    const song = this.list[i];
    this.toggle.emit({...song, [prop]: !song[prop]});
  }

}

