import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItem, NavItemBaseComponent } from '../shared/nav-item-base/nav-item-base.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { transitionFadeIn } from 'src/animations/transition.animations';

@Component({
  selector: 'nav-item-menu',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './nav-item-menu.component.html',
  styleUrls: ['./nav-item-menu.component.scss'],
  animations: [transitionFadeIn]
})
export class NavItemMenuComponent extends NavItemBaseComponent {
  public mainFoods: NavItem[] = [
    { label: 'Pasta', route: '/' },
    { label: 'Pizza', route: '/' },
    { label: 'Subs and Sandwiches', route: '/' },
  ];
  public sides: NavItem[] = [
    { label: 'Appetizers', route: '/' },
    { label: 'Salads', route: '/' },
  ];
  public others: NavItem[] = [
    { label: 'Desserts', route: '/' },
    { label: 'Beverages', route: '/' }
  ];
}
