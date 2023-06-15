import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NavItem, NavItemBaseComponent } from '../shared/nav-item-base/nav-item-base.component';

@Component({
  selector: 'nav-home',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.scss'],
})
export class NavHomeComponent extends NavItemBaseComponent {
  public listItems: NavItem[] = [{ label: '', route: "/" }];

}
