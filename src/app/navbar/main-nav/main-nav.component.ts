import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Thay đổi mật khẩu',
        icon: 'pi pi-user-edit',
      },
      {
        label: 'Kích hoạt tài khoản',
        icon: 'pi pi-check',
      },
      {
        label: 'Logout',
        icon: 'pi pi-refresh',
      },
    ];
  }
}
