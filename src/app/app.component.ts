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
  
  public left: number = 0;
  public vidLength: number = 0;
  public currentTimes: number = 0;
  public currentPercent: number = 0;
  public rangeButton: number = 0;
  public rangeBar: number = 0;
  public rangeButtonPercent: number = 0;
  
  constructor() {
    console.log(this, 'what is this')
  }

  ngAfterViewInit() {
    console.log(this.rangeButton.nativeElement.offsetWidth, 'video el')
  }

  ngOnInit(){
  }

  public currentTime() {
    this.vidLength = this.videoPlayer.nativeElement.duration;
    this.currentTimes = this.videoPlayer.nativeElement.currentTime;
    this.rangeBar = this.rangeBar.nativeElement.offsetWidth;
    this.rangeButton = this.rangeButton.nativeElement.offsetWidth;

    console.log(this.rangeBar,'range bar')

    this.currentPercent = (this.currentTimes / this.vidLength) * 100;
    this.currentPercent = (this.currentPercent.toFixed(2));

    this.rangeButtonPercent = (this.rangeBar - this.rangeButton) / this.rangeBar;

    console.log(this.rangeButtonPercent, 'range button in percent')

    // this.left = this.currentPercent
    this.left = this.currentPercent;
    console.log(this.left, 'left pos')
    
  }

  public doMyOwnThing(event) {
    console.log(event,'here')
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



