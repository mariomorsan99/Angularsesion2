import { Component, OnInit } from '@angular/core';
import { GoogleService } from '../../servicios/google.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private googleService:GoogleService) { }

  ngOnInit(): void {
  
    
  }



  login(){
     this.googleService.loginGoogle();
  }

}
