import { Component } from '@angular/core';
import { IntroComponent } from '../intro/intro.component';
import { DisplayComponent } from '../display/display.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-portal',
  imports: [IntroComponent, DisplayComponent, FooterComponent],
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.css',
  standalone: true
})
export class PortalComponent {

}
