import { Component, ElementRef, ViewChild } from '@angular/core';
import { Evento, eventos } from '../eventos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  title = 'optativa';

  eventosList: Evento[] = eventos;
  
  constructor(private router: Router){}

  onNavigatePay(evento: Evento){
    this.router.navigate(['pay']);

  }
}
