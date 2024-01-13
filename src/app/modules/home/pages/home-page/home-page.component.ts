import { Component } from '@angular/core';
import { HomeModule } from '@modules/home/home.module';
import { MediaPlayerComponent } from '@shared/components/media-player/media-player.component';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeModule,SideBarComponent, MediaPlayerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
