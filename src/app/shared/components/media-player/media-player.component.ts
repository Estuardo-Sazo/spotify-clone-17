import { Component } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.scss'
})
export class MediaPlayerComponent {
  mockCover:any ={
    cover: 'https://i.scdn.co/image/ab67616d0000b273e4b9b5b6b6b6b6b6b6b6b6b6',
    name: 'The Weeknd',
    album: 'After Hours',
  }

}
