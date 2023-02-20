import { Component } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id=0;
constructor (myActivated:ActivatedRoute){
this.id=myActivated.snapshot.params["id"];

}
}