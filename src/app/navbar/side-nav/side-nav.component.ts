import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Tổng quan',
      },
      {
        label: 'Tuyển dụng',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Danh sách tuyển dụng',
          },
          {
            label: 'Vị trí tuyển dụng',
          },
          {
            label: 'Kệ hoạch tuyển dụng',
          },
          {
            label: 'Mail đã gửi',
          },
          {
            label: 'Tuyển dụng lại',
          },
          {
            label: 'Danh sách đen',
          },
          {
            label: 'Danh sách tiềm năng',
          },
          {
            label: 'Lịch sử tuyển dụng',
          },
        ],
      },
      {
        label: 'Quan hệ lao động',
        icon: 'pi pi-sitemap',
        items: [
          {
            label: 'Tổng quan nhân sự',
          },
          {
            label: 'Hồ sơ nhân sự',
          },
          {
            label: 'Vị trí công việc',
          },
          {
            label: 'Lịch làm việc',
          },
          {
            label: 'Xử lý hợp đồng',
          },
          {
            label: 'Quá trình lương',
          },
          {
            label: 'Biến động BHXH',
          },
          {
            label: 'Hồ sơ nghỉ việc',
          },
          {
            label: 'Hồ sơ cá nhân',
          },
          {
            label: 'Người quản lý',
          },
          {
            label: 'Phê duyệt',
          },
        ],
      },
      {
        label: 'Chấm công',
        icon: 'pi pi-check-circle',
        items: [
          {
            label: 'Tổng quan chấm công',
          },
          {
            label: 'Tổng hợp công',
          },
          {
            label: 'Chấm công',
          },
          {
            label: 'Giải trình công',
          },
          {
            label: 'Đăng kí wifi',
          },
          {
            label: 'Ăn ca',
          },
          {
            label: 'Phép năm',
          },
          {
            label: 'Phép bù',
          },
          {
            label: 'Nghỉ không lương',
          },
          {
            label: 'Thai sản',
          },
        ],
      },
      {
        label: 'Lương thuế',
        icon: 'pi pi-dollar',
        items: [
          {
            label: 'Chính sách',
          },
          {
            label: 'Bảng lương',
          },
          {
            label: 'Thuế thu nhập',
          },
          {
            label: 'Người phụ thuộc',
          },
          {
            label: 'Tiền lương',
          },
        ],
      },
      {
        label: 'Hành chính',
        icon: 'pi pi-credit-card',
        items: [
          {
            label: 'Tài liệu chung',
          },
          {
            label: 'Thông báo',
          },
          {
            label: 'Quản lý lịch họp',
          },
          {
            label: 'Góp ý',
          },
        ],
      },
      {
        label: 'Phân quyền',
        icon: 'pi pi-users',
        items: [
          {
            label: 'Thang máy',
          },
          {
            label: 'Xe nhân viên',
          },
          {
            label: 'Thẻ nhân viên',
          },
        ],
      },
      {
        label: 'Cài đặt',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Cài đặt ngày nghỉ lễ',
          },
          {
            label: 'Quản lý tổ chức',
          },
          {
            label: 'Cài đặt công ty',
          },
          {
            label: 'Hợp đồng mẫu',
          },
          {
            label: 'Chuyên môn',
          },
          {
            label: 'Nơi làm việc',
          },
          {
            label: 'Lý do nghỉ phép',
          },
          {
            label: 'Chức vụ',
          },
          {
            label: 'Cài đặt tiến trình',
          },
          {
            label: 'Chức danh',
          },
          {
            label: 'Lịch làm việc',
          },
          {
            label: 'Thiết lập Wifi',
          },
          {
            label: 'Loại giấy tờ',
          },
          {
            label: 'Danh sách cấp bậc',
          },
        ],
      },
      {
        label: 'Báo cáo',
        icon: 'pi pi-envelope',
        items: [
          {
            label: 'Tuyển dụng',
          },
          {
            label: 'Thông tin nhân sự',
          },
          {
            label: 'Thuế & bảo hiểm',
          },
          {
            label: 'Chấm công & lương',
          },
          {
            label: 'Báo cáo tổng hợp',
          },
        ],
      },
    ];
  }
}
