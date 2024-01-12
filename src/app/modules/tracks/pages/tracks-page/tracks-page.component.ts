import { Component } from '@angular/core';
import { TracksModule } from '@modules/tracks/tracks.module';

@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [TracksModule],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.scss'
})
export class TracksPageComponent {

}
