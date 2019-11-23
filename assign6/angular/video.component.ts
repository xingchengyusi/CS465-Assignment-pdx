import { Component, Input } from '@angular/core';
import { VideoItem } from './video-item';

@Component({
  selector: 'my-video',
  templateUrl: './video.component.html'
})

export class VideoComponent {
  @Input() video: VideoItem;
}