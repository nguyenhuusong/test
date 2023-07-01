import { Component, OnInit } from '@angular/core';
import { TuyenDungService } from './tuyendung.service';

@Component({
  selector: 'app-tuyendung',
  templateUrl: './tuyendung.component.html',
  styleUrls: ['./tuyendung.component.css'],
})
export class TuyendungComponent implements OnInit {
  constructor(private tuyendung: TuyenDungService) {}
  ngOnInit(): void {
    this.tuyendung.fetchData().subscribe((res) => console.log(res));
  }
}
