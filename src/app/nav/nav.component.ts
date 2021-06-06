import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  authenticated = false
  constructor(private http:HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth:boolean)=>{
        this.authenticated = auth;
      })
  }

  logout(): void{
    this.http.post('http://localhost:8000/api/logout',{},{withCredentials:true})
    .subscribe(()=>{
      //Emitters.authEmitter.
      this.authenticated = false;
      this.router.navigate(['/login']);
      Emitters.authEmitter.next(false);
    })
  }

}
