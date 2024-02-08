import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover: string = ''
  @Input()
  title: string = ''
  @Input()
  Id:string = '0'
  constructor () {

  }

  ngOnInit() {

  }
}
