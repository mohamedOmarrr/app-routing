import { Component } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
  images: Images[] = [
    {src:'./images/poert1.png', alt:'house wood'},
    {src:'./images/port2.png', alt:'chocolate cake'},
    {src:'./images/port3.png', alt:'caravan'},
    {src:'./images/poert1.png', alt:'house wood'},
    {src:'./images/port2.png', alt:'chocolate cake'},
    {src:'./images/port3.png', alt:'caravan'},
  ]
  
  largeImg:boolean = false
  Src:string = ''
  Alt:string = ''

  getSrc(event:MouseEvent):void{ 
    this.largeImg = true
    let imgInfo = event.target as HTMLImageElement

    this.Src =imgInfo.src
    this.Alt =imgInfo.alt
    
  }

  checkOut(event:MouseEvent):void{
    if ((event.target as HTMLElement).hasAttribute('src')){
      return;
    }else{
      this.largeImg = false
    }
  }
}
