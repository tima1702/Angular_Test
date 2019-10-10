import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../auth/auth.service.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-langing',
  templateUrl: './langing.component.html',
  styleUrls: ['./langing.component.scss']
})
export class LangingComponent implements OnInit {
  role;

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(private authService: AuthService, public router: Router, config: NgbCarouselConfig) {
    const email = JSON.parse(localStorage.getItem('user')).email;
    this.authService.findUser(email).subscribe((data: [{role}]) => {
      this.role = data[0].role === 'admin';
    });

    config.interval = 15000000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
