import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortalComponent } from './portal/portal.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { ServicesComponent } from './services/services.component';
import { DisplayComponent } from './display/display.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { OtherservicesComponent } from './otherservices/otherservices.component';

export const routes: Routes = [
    {
        path: 'portal', component: PortalComponent
      },
      {
        path: 'customerPortal', component: RegisterformComponent
      },
      {
        path: 'about', component: AboutComponent
      },
      {
        path: 'services', component: ServicesComponent
      },
      {
        path: 'displauy', component: DisplayComponent
      },
      {
        path: 'footer', component: FooterComponent
      },
      {
        path: 'intro', component: IntroComponent
      },
      {
        path: 'otherservices', component: OtherservicesComponent
      },
      {
        path: '', 
        redirectTo: 'portal', 
        pathMatch: 'full'
      }
];
