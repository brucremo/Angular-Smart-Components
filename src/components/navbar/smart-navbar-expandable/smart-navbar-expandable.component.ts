import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Portal } from '@angular/cdk/portal';
import { MatButtonModule } from '@angular/material/button';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { PortalModule } from '@angular/cdk/portal';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SmartNavbarContent } from '../shared/smart-navbar-content.interface';
import { SmartNavbarBaseComponent } from '../smart-navbar-base/smart-navbar-base.component';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'smart-navbar-expandable',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    PortalModule,
    MatIconModule,
  ],
  templateUrl: './smart-navbar-expandable.component.html',
  styleUrls: [
    './smart-navbar-expandable.component.scss',
    '../smart-navbar-base/smart-navbar-base.component.css',
  ],
  animations: [
    trigger('toggleNavbar', [
      state(
        'expanded',
        style({
          height: '300px',
          opacity: 1,
        })
      ),
      state(
        'collapsed',
        style({
          height: '60px',
          opacity: 0.75,
        })
      ),
      transition('expanded <=> collapsed', [animate('0.4s ease')]),
    ]),
  ],
})
export class SmartNavbarExpandableComponent extends SmartNavbarBaseComponent {
  public isExpanded: boolean = false;
  public selectedExpandableContent: SmartNavbarExpandableContent | null = null;

  constructor(
    public override breakPointObserver: BreakpointObserver,
    public override router: Router
  ) {
    super(breakPointObserver, router);
  }

  public onMouseEnteredItem(item: SmartNavbarExpandableContent): void {
    if (!!item.portalContent) {
      this.isExpanded = true;
      this.selectedExpandableContent = item;
    }
  }

  public onMouseLeaveBar(): void {
    this.isExpanded = false;
    this.selectedExpandableContent = null;
  }
}

export class SmartNavbarExpandableContent implements SmartNavbarContent {
  label?: string;
  route?: string | null;
  portalContent?: Portal<any> | null;
}
