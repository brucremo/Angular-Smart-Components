import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SmartNavbarSidemenuContent } from '../smart-navbar-sidemenu.component';

@Component({
  selector: 'app-smart-nav-list-item-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
  ],
  templateUrl: './smart-nav-list-item-menu.component.html',
  styleUrls: ['./smart-nav-list-item-menu.component.scss'],
})
export class SmartNavListItemMenuComponent {
  @Input() isSelected: boolean = false;
  @Input() isExpanded: boolean = false;
  @Input() content!: SmartNavbarSidemenuContent;

  @Output() onItemClicked: EventEmitter<any> = new EventEmitter<any>();
}
