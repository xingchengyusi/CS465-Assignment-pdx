import { Injectable } from '@angular/core';
import { Api } from '../api.service';

@Injectable()
export class VideoService {
  search(searchString: string) {
    return Api.fetch(searchString);
  }
}