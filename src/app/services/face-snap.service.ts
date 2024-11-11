import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {
  faceSnap: FaceSnap[] = [
    {
      title: 'Mountain Adventure',
      description: 'A thrilling adventure to the high mountains',
      imageUrl: 'https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
      createDate: new Date(),
      snaps: 50
    },
    {
      title: 'Beach Relaxation',
      description: 'Relaxing on a tropical beach during sunset',
      imageUrl: 'https://www.shutterstock.com/shutterstock/photos/1883859943/display_1500/stock-photo-the-word-example-is-written-on-a-magnifying-glass-on-a-yellow-background-1883859943.jpg',
      createDate: new Date(),
      snaps: 30
    },
    {
      title: 'City Lights',
      description: 'The vibrant energy of a bustling city at night',
      imageUrl: 'https://st4.depositphotos.com/14431644/22076/i/450/depositphotos_220767694-stock-photo-handwriting-text-writing-example-concept.jpg',
      createDate: new Date(),
      snaps: 75
    }
  ]
  constructor() { }
}
