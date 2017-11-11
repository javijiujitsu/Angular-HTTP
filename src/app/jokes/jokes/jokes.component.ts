import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css'],
  providers: [JokesService]

})

export class JokesComponent implements OnInit {

  joke$: Observable<string>;
  constructor(private jokes: JokesService) {}

  ngOnInit() {}

  getRandomJoke() {
    this.joke$ = this.jokes.getRandom();
  }
}
