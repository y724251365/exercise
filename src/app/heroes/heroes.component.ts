import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroName: string;
  heroId: number;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.heroName = this.routeInfo.snapshot.params['name'];
    this.heroId = this.routeInfo.snapshot.params['id'];
  }

}
