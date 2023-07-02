import { Component, OnInit } from '@angular/core';
import { TuyenDungService } from './tuyendung.service';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tuyendung',
  templateUrl: './tuyendung.component.html',
  styleUrls: ['./tuyendung.component.css'],
})
export class TuyendungComponent implements OnInit {
  dataNhansu!: User[];
  gridHeader: string[] = [
    'Ảnh',
    'Vị trí tuyển dụng',
    'Nguồn tuyển dụng',
    'Họ tên',
    'Số điện thoại',
    'Email',
    'Giới tính',
    'Ngày sinh',
    'Ngày ứng tuyển',
    'Chuyên môn',
    'CV Tuyển dụng',
    'Ngày tạo',
    'Người tạo',
    'Ngày nhận việc',
    'Gửi email',
    'Đã gửi email',
    'Hồ sơ CN',
    'Chuyển hồ sơ',
    'Vòng tuyển dụng',
  ];
  constructor(private tuyendung: TuyenDungService, private http: HttpClient) {}
  ngOnInit(): void {
    this.tuyendung.dataChange.subscribe((data) => {
      this.dataNhansu = data;
    });
    // this.dataNhansu = res.data.dataList;
  }
}
