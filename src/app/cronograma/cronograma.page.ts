import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.page.html',
  styleUrls: ['./cronograma.page.scss'],
})
export class CronogramaPage implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  navegarHome(){
    this.router.navigate(['/home'])
  }

}
