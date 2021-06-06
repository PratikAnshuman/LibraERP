import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  message = '';
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/user',{withCredentials:true}).subscribe(
      (res:any)=>{
        this.message = `Hi ${res.name}`;
        Emitters.authEmitter.emit(true);

      },
      err=>{
        this.message = 'you are not loggedin';
        Emitters.authEmitter.emit(false);
        this.router.navigate(['/login']);
      })
  }

}
