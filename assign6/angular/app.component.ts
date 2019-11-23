import { Component } from '@angular/core';
import { VideoItem } from './video/video-item';
import { VideoService } from './video/video.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app.html'
})

export class AppComponent {
  videos: VideoItem[] = [];
  title = 'MewTube';

  constructor(public videoService: VideoService) {}

  search(searchString: string) {this.videos = this.videoService.search(searchString);}
}