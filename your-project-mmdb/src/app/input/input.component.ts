import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  keyup = this.httpService.keyupSubject;
  constructor(private httpService: HttpserviceService) {}

  ngOnInit(): void {}
}
