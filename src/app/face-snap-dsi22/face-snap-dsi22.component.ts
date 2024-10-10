import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './face-snap-dsi22.component.html',
  styleUrl: './face-snap-dsi22.component.scss'
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;
  buttonText: string = "Oh snap!";
  
  onAddSnap(){
    this.faceSnap.snaps++;
  }
  onSnap(){
    if(this.buttonText=="Oh snap!"){
      this.faceSnap.snaps++;
      this.buttonText="Oops, unSnap!"
    } else {
      this.faceSnap.snaps--;
      this.buttonText="Oh snap!";
    }
  }
}
