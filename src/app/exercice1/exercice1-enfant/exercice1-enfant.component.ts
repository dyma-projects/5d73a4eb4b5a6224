import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public  cpt: number; 
  @Output() result = new EventEmitter();
    
  constructor() { 
  }

  ngOnInit() {
  }


  addValue(): void {
    this.cpt = this.cpt + 1;
    this.result.emit({
      value: this.cpt
    });
    }

  reduceValue(): void {
    this.cpt = this.cpt - 1;
    this.result.emit({
      value: this.cpt
    });
    }

}
