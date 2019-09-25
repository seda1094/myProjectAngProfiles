import { Component, OnInit, OnChanges } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';
import * as Rx from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{

  title = 'fire';
  items;
  tasks = [];
  user = "";
  showSpinner: boolean = true
  constructor(private http: Http,private httpClient:HttpClient, private authService:AuthService){
    let userEmail = firebase.auth().currentUser.email
    this.user = userEmail.substring(0, 4);
    alert(this.user)
    this.items = this.httpClient.get('https://tasks-d49c7.firebaseio.com/'+this.user+'.json')
    .subscribe(
      ()=>{
        this.showSpinner = false;
      }
    )
    
  }

  onSubmit(data:NgForm){
      const token = this.authService.getToken()  
      this.tasks.push({name:data.value.name,
      content: data.value.desc,
      author: data.value.author,
      noStudent: data.value.wasStudent})
      this.http.put('https://tasks-d49c7.firebaseio.com/'+this.user+'.json',this.tasks)
                                  .subscribe(
                                    (res) => 
                                    { 
                                      
                                      this.items = this.httpClient.get('https://tasks-d49c7.firebaseio.com/'+this.user+'.json');
                                      console.log(res)
                                    },
                                    (err) => console.log(err)
                                  )
    
  };
   


                       
}