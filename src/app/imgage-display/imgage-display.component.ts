import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';

@Component({
  selector: 'app-imgage-display',
  templateUrl: './imgage-display.component.html',
  styleUrls: ['./imgage-display.component.css']
})
export class ImgageDisplayComponent implements OnInit {
@Input() abc:string;

@Output() result	=	new	EventEmitter<number>();
// img:EventEmitter<string>;
  // imgVal:string="../assets/Nature.jpg";
   
constructor()
{
  
}
 ngOnInit()
 {} 

onClick(abc)
{
  
 this.result.emit(abc);
}

}
