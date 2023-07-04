import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { SmartLocalStorageService } from 'src/services/ux/smart-local-storage.service';
import { SmartNavbarContent } from '../shared/smart-navbar-content.interface';
import { SmartNavbarBaseComponent } from '../smart-navbar-base/smart-navbar-base.component';
import { Router } from '@angular/router';
import {
  MatSidenav,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { SmartNavListItemComponent } from './smart-nav-list-item/smart-nav-list-item.component';
import { MatListModule } from '@angular/material/list';

const toggleTransitionDuration: string = '0.2s ease';
const sidenavClosedWidth: string = "77px";
const sidenavClosedWidthHandset: string = "0px";
const sidenavOpenWidth: string = "200px";
const sidenavOpenWidthHandset: string = "100%";

@Component({
  selector: 'smart-navbar-sidemenu',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    SmartNavListItemComponent,
  ],
  templateUrl: './smart-navbar-sidemenu.component.html',
  styleUrls: [
    './smart-navbar-sidemenu.component.scss',
    '../smart-navbar-base/smart-navbar-base.component.css',
  ],
  providers: [SmartLocalStorageService],
  animations: [
    trigger('toggleNavbar', [
      state(
        'opened',
        style({
          width: sidenavOpenWidth,
        })
      ),
      state(
        'closed',
        style({
          width: sidenavClosedWidth,
        })
      ),
      state(
        'opened-handset',
        style({
          width: sidenavOpenWidthHandset,
        })
      ),
      state(
        'closed-handset',
        style({
          width: sidenavClosedWidthHandset,
        })
      ),
      transition('opened <=> closed', [animate(toggleTransitionDuration)]),
      transition('opened-handset <=> closed-handset', [animate(toggleTransitionDuration)]),
    ]),
  ],
})
export class SmartNavbarSidemenuComponent extends SmartNavbarBaseComponent {
  @Input() alignToolbarContent: 'left' | 'right' = 'right';
  @Input() sidenavAlwaysOn: boolean = false;

  @ViewChild(MatSidenav) sidenav: MatSidenav | undefined;

  public isSidenavOpen: boolean = false;
  public isHandset: boolean = false;

  constructor(
    public override breakPointObserver: BreakpointObserver,
    private localStorage: SmartLocalStorageService,
    public override router: Router
  ) {
    super(breakPointObserver, router);
    this.isSidenavOpen =
      this.localStorage.getItem('isSideMenuExpanded') === 'true';

    this.breakpoints.subscribe((screen) => {
      this.isHandset = screen.isHandset;
    });
  }

  public toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
    this.localStorage.setItem('isSideMenuExpanded', `${this.isSidenavOpen}`);
  }
}

export class SmartNavbarSidemenuContent implements SmartNavbarContent {
  icon?: string;
  label?: string;
  route?: string | null;
  subMenus?: SmartNavbarSidemenuContent[];
}
