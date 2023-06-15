import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { transitionFadeIn } from 'src/animations/transition.animations';

@Component({
  selector: 'nav-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-contact.component.html',
  styleUrls: ['./nav-contact.component.scss'],
  animations: [transitionFadeIn]
})
export class NavContactComponent {

}
