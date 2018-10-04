import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  @ViewChild("videoPlayer") videoPlayer: ElementRef;
  @ViewChild("rangeBar") rangeBar: ElementRef;
  @ViewChild("rangeButton") rangeButton: ElementRef;
  @ViewChild("seekBar") seekBar: ElementRef;
  
  public left: number = 0;
  public vidLength: number = 0;
  public currentTimes: number = 100;
  public currentPercent: number = 0;
  public rangeButton: number = 0;
  public rangeBar: number = 0;
  public rangeButtonPercent: number = 0;
  public seekPosition: number = 30;
  
  constructor() {
  }

  ngOnInit() {
    console.log(this.seekBar.nativeElement.value, 'v')
    this.seekBar.nativeElement.value = 50

  }

  ngAfterViewInit(){

  }

  public angularMethod(val) {
    this.vidLength = this.videoPlayer.nativeElement.duration
  }

  public valueChanged(val) {
    this.videoPlayer.nativeElement.currentTime = val
  }
  public updateTime(){
    var value = (100 / this.videoPlayer.nativeElement.duration) * this.videoPlayer.nativeElement.currentTime;
    this.seekBar.value = 50;
    console.log('time')
  }

  public playPlay() {
    this.videoPlayer.nativeElement.play();
    this.videoPlayer.nativeElement.currentTime;
  }

  public playPause() {
    this.videoPlayer.nativeElement.pause();
  }

  public playNext() {
    this.videoPlayer.nativeElement.currentTime = this.videoPlayer.nativeElement.currentTime + 5;
  }
  
  public playPrev() {
    this.videoPlayer.nativeElement.currentTime = this.videoPlayer.nativeElement.currentTime - 5;
  }

  title = 'app';
  name = 'leo';

}



