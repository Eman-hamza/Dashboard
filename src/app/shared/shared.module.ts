import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SpinnerComponent,
    NotfoundComponent,
    SideBarComponent,
    
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ButtonModule,
    SidebarModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    SpinnerComponent,
    NotfoundComponent,
    SideBarComponent,
    ButtonModule,
    SidebarModule
  ]
})
export class SharedModule { }
