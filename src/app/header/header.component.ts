import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.styles.scss']
})
export class HeaderComponent {
  navbarOpen = false;

  closeModal() {
    this.navbarOpen = false;
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
