import { Component, Input } from '@angular/core';
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

@Component({
  selector: 'smart-navbar-expandable',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, PortalModule],
  templateUrl: './smart-navbar-expandable.component.html',
  styleUrls: ['./smart-navbar-expandable.component.scss'],
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
export class SmartNavbarExpandableComponent {
  @Input() content: SmartNavbarExpandableContent[] = [];
  @Input() logoImagePath: string | null = null;

  public isExpanded: boolean = false;
  public selectedExpandableContent: SmartNavbarExpandableContent | null = null;;

  public onMouseEnteredItem(item: SmartNavbarExpandableContent): void {
    this.isExpanded = true;
    this.selectedExpandableContent = item;
  }

  public onMouseLeaveBar(): void {
    this.isExpanded = false;
    this.selectedExpandableContent = null;
  }
}

export interface SmartNavbarExpandableContent {
  label: string;
  portalContent: Portal<any>
}
