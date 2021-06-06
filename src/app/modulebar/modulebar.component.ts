import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-modulebar',
  templateUrl: './modulebar.component.html',
  styleUrls: ['./modulebar.component.scss']
})
export class ModulebarComponent implements OnInit {

  constructor() { }
  authenticated = false
  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth:boolean)=>{
        this.authenticated = auth;
      })
  }

}
