import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import {FaceSnapComponent} from "./face-snap-dsi22/face-snap-dsi22.component"
import { FaceSnap } from './models/face-snap.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  mySnaps: FaceSnap[] = [];
  ngOnInit(){
    // this.mySnaps = JSON.parse(localStorage.getItem("snaps")||"[]");
    this.loadSnaps();
  }
  newSnap: any = {
    title:"",
    description:"",
    imageUrl:"",
    createDate: new Date(),
    snaps:"",
  };

  loadSnaps(){
    if(typeof localStorage != "undefined"){
      const storedSnaps = localStorage.getItem("snaps");
      if(storedSnaps){
        this.mySnaps = JSON.parse(storedSnaps);
      }
    }
  }

  addNewSnap(){
    this.mySnaps.push(this.newSnap);
    localStorage.setItem("snaps",JSON.stringify(this.mySnaps));
  }
}
