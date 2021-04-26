import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  constructor() { }
  title = "Millenials Run";
  ngOnInit(): void {
  }

  printTitle(){
    return `Last time in Dragon Durag, ${this.title} Goku beats Kinda Fly`
  }

}
