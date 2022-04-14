import { Component, OnInit, ViewChild, HostListener, ViewChildren, QueryList } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppSettings, Settings } from 'src/app/app.settings';
import { AppService } from 'src/app/app.service';
import { MenuItem } from 'src/app/app.models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-category-single',
  templateUrl: './category-single.component.html',
  styleUrls: ['./category-single.component.scss'],
})
export class CategorySingleComponent implements OnInit {
  private sub: any;
  public menuItem!: MenuItem;
  public settings: Settings;
  public quantityCount: number = 1;
  public relatedMenuItems: Array<MenuItem> = [];

  constructor(public appSettings: AppSettings, public appService: AppService, private activatedRoute: ActivatedRoute, public fb: FormBuilder, public snackBar: MatSnackBar) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.getMenuItemById(params['id']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public getMenuItemById(id: number) {
    const index: number = this.appService.Data.cartList.findIndex((item) => item.id == id);
    if (index !== -1) {
      this.menuItem = this.appService.Data.cartList[index];
      this.quantityCount = this.menuItem.cartCount;
    } else {
      this.appService.getMenuItemById(id).subscribe((data) => {
        this.menuItem = data;
    console.log(this.menuItem);
  });
    }
  }
}
