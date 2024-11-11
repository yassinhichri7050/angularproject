import { ChangeDetectionStrategy, Component } from '@angular/core';
import {FaceSnapComponent} from "../face-snap-dsi22/face-snap-dsi22.component"
import { FaceSnap } from '../models/face-snap.model';
import { CommonModule } from '@angular/common';
import { FaceSnapService } from '../services/face-snap.service';
// Material
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss',
  standalone: true,
  imports: [FaceSnapComponent,CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaceSnapListComponent {
  constructor(private FaceSnapService: FaceSnapService){}
  
  faceSnaps!: FaceSnap[];

  ngOnInit(): void{
    this.faceSnaps = this.FaceSnapService.faceSnap;
  }
}
