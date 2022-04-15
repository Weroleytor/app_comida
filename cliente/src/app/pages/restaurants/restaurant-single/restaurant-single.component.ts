import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-single',
  templateUrl: './restaurant-single.component.html',
  styleUrls: ['./restaurant-single.component.scss'],
})
export class RestaurantSingleComponent implements OnInit {
  private sub: any;

  constructor(private _location: Location, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      // this.getMenuItemById(params['id']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public onReturn() {
    this._location.back();
  }
}
