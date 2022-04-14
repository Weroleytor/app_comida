import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Menu } from '../menu/menu.model';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [MenuService],
})
export class FooterComponent implements OnInit {
  public menuItems: Array<Menu> = [];

  constructor(public menuService: MenuService, public appService: AppService) {}

  ngOnInit() {
    this.menuItems = this.menuService.getVerticalMenuItems();
    console.log(this.menuItems);
  }

  onClick(menuId: number) {
    this.menuService.toggleMenuItem(menuId);
  }
}
