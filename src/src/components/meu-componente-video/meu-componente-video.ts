import { Component } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player';

/**
 * Generated class for the MeuComponenteVideoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'meu-componente-video',
  templateUrl: 'meu-componente-video.html'
})
export class MeuComponenteVideoComponent {

  text: string;

  constructor(private videoPlayer: VideoPlayer) {
    this.videoPlayer.play('./../../assets/videos/Graph.mp4').then(() => {
      console.log('video completed');
     }).catch(err => {
      console.log(err);
     });
     this.text="texto";
  }

}
