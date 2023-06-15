import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-item-base',
  standalone: true,
  imports: [CommonModule],
  template: '',
})
export class NavItemBaseComponent {
  constructor(private router: Router) {}

  public onItemClicked(item: NavItem): void {
    this.router.navigate([item.route]);
  }
}

export interface NavItem {
  label: string;
  route: string;
}
