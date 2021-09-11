import { Component, OnInit } from '@angular/core';
import { GoogleService } from '../../servicios/google.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userGoogle:any
  nombreUsuario=''

  constructor(private googleService:GoogleService) {

     this.userGoogle=localStorage.getItem('userGoogle')
     console.log(this.userGoogle);
     const {name , email}=JSON.parse(this.userGoogle)
     this.nombreUsuario=name;
     console.log(email,name);

   }

  ngOnInit(): void {
   
  }

  logout(){
    this.googleService.logoutGoogle();
  }

}
