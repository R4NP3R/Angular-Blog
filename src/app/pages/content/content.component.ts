import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  PhotoCover: string = ''
  contentTitle: string = ''
  contentDescription: string = ''
  private id: string | null = '1'

  constructor (private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get('id')
      )

      this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null ) {
    const result = dataFake.filter(article => article.id === id)[0]

    this.PhotoCover = result.photo
    this.contentTitle = result.title
    this.contentDescription = result.description

  }
}
