import { Component } from '@angular/core';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';

@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [SectionGenericComponent],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.scss'
})
export class TracksPageComponent {
 mockTracksList = [
  {
    name: 'Canción 1',
    album: 'Album 1',
    cover: 'https://picsum.photos/200/300',
    url: 'https://picsum.photos/200/300',
    _id:1,
  },
  {
    name: 'Canción 2',
    album: 'Album 2',
    cover: 'https://picsum.photos/200/300',
    url: 'https://picsum.photos/200/300',
    _id:2,
  },
  {
    name: 'Canción 3',
    album: 'Album 3',
    cover: 'https://picsum.photos/200/300',
    url: 'https://picsum.photos/200/300',
    _id:3,
  }
 ];

}
