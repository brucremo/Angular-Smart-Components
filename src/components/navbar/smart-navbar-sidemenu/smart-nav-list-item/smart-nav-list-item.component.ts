import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SmartNavbarSidemenuContent } from '../smart-navbar-sidemenu.component';

@Component({
  selector: 'smart-nav-list-item',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
  ],
  templateUrl: './smart-nav-list-item.component.html',
  styleUrls: ['./smart-nav-list-item.component.scss'],
})
export class SmartNavListItemComponent {
  @Input() isExpanded: boolean = false;
  @Input() content!: SmartNavbarSidemenuContent;
}
