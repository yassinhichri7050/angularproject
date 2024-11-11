import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  templateUrl: './face-snap-dsi22.component.html',
  styleUrl: './face-snap-dsi22.component.scss',
  imports: [CommonModule,MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
