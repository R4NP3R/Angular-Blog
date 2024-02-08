import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { dataFake } from '../../data/dataFake';
import { Articles } from '../../interfaces/articlesData';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, MenuBarComponent, MenuTitleComponent, BigCardComponent, SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  articles: Articles[] = []
  photoCover: string = ''
  title: string = ''
  description: string = ''
  mainPhotoCover: string = ''
  mainTitle: string = ''
  mainDescription: string = ''

  retorna() {
    console.log(dataFake[2])
  }

  constructor(){
    this.articles = dataFake
    this.photoCover = dataFake[1].photo
    this.title = dataFake[1].title
    this.description = dataFake[1].description

    this.mainPhotoCover = dataFake[0].photo
    this.mainTitle = dataFake[0].title
    this.mainDescription = dataFake[0].description
  }

  ngOnInit(): void {
    this.retorna();
  }


}
