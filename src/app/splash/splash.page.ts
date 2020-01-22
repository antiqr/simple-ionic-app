import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Observable } from "rxjs/Observable";
import {  ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  public delay:number;
  constructor(private router: Router) { }

  ngOnInit() {
    this.delay = 3000;
    this.setTimer(this.delay).subscribe(update => {
             
      console.log("time  is expired" );
      this.router.navigateByUrl("/splash/auth");
    
  });
  }


   setTimer(interval:number):Observable<number> {
   
    return timer(interval);

   }
}
