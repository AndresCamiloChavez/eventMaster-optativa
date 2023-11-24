import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-pay',
  templateUrl: './form-pay.component.html',
  styleUrls: ['./form-pay.component.scss']
})
export class FormPayComponent {

  constructor(private router: Router){}
  navigate(){

    this.router.navigate(['']);

  }

}
