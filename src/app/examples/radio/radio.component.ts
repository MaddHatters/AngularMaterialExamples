import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit, AfterViewInit {


  favoriteSeasonNoGroup!: string;
  seasonsNoGroup: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  favoriteSeasonNoForm!: string;
  seasonsNoForm: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  favoriteSeason!: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  constructor() {
    this.seasons = this.seasons;
  }

  ngOnInit(): void {
    this.seasons = this.seasons;
  }

  ngAfterViewInit() {
    this.seasons = this.seasons;
  }

}
