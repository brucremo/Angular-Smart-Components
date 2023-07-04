import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartNavbarContent } from '../shared/smart-navbar-content.interface';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs';

@Component({
  selector: 'smart-navbar-base',
  standalone: true,
  imports: [CommonModule],
  template: '',
})
export class SmartNavbarBaseComponent {
  @Input() content: SmartNavbarContent[] = [];
  @Input() logoImagePath: string | null = null;

  constructor(
    public breakPointObserver: BreakpointObserver,
    public router: Router
  ) {}

  // --- Event Handling ---
  public onItemClicked(item: SmartNavbarContent): void {
    if (!!item.route) {
      this.router.navigate([item.route]);
    }
  }

  // --- Screen Size / Orientation Handling ---
  public breakpoints = this.breakPointObserver.observe([
    Breakpoints.XSmall,
    Breakpoints.Small,
    Breakpoints.Medium,
    Breakpoints.Large,
    Breakpoints.XLarge,
    Breakpoints.HandsetLandscape,
    Breakpoints.HandsetPortrait,
    Breakpoints.TabletLandscape,
    Breakpoints.TabletPortrait,
    Breakpoints.WebLandscape,
    Breakpoints.WebPortrait,
  ]).pipe(
    map((result) => ({
      isXSmall: result.breakpoints[Breakpoints.XSmall],
      isSmall: result.breakpoints[Breakpoints.Small],
      isMedium: result.breakpoints[Breakpoints.Medium],
      isLarge: result.breakpoints[Breakpoints.Large],
      isXLarge: result.breakpoints[Breakpoints.XLarge],
      isHandset: result.breakpoints[Breakpoints.HandsetLandscape] || result.breakpoints[Breakpoints.HandsetPortrait],
      isTablet: result.breakpoints[Breakpoints.TabletLandscape] || result.breakpoints[Breakpoints.TabletPortrait],
      isWeb: result.breakpoints[Breakpoints.WebLandscape] || result.breakpoints[Breakpoints.WebPortrait],
      isPortrait: result.breakpoints[Breakpoints.TabletPortrait] || result.breakpoints[Breakpoints.HandsetPortrait] || result.breakpoints[Breakpoints.WebPortrait],
      isLandscape: result.breakpoints[Breakpoints.HandsetLandscape] || result.breakpoints[Breakpoints.TabletLandscape] || result.breakpoints[Breakpoints.WebLandscape],
    })),
    shareReplay()
  );
}